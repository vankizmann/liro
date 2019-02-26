<?php

namespace Liro\System\Cms\Manager;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Liro\System\Exceptions\Exception;

class RouteManager
{
    public $routes;
    public $menus;

    public function __construct()
    {
        $this->routes = new Collection();
        $this->menus = new Collection();
    }

    public function getFlatRoutes()
    {
        return $this->routes->flatMap(function ($routes) {
            return $routes;
        });
    }

    public function boot()
    {
        $this->bootModuleRoutes();
        $this->bootMenuRoutes();
    }

    public function registerRoute($name, $routes)
    {
        $this->routes->put($name, $routes);
    }

    public function bootModuleRoutes()
    {
        foreach ( app()->getAllowedLocales() as $locale ) {
            $this->bootLocalizedModuleRoutes($locale);
        }
    }

    public function bootLocalizedModuleRoutes($locale)
    {
        foreach ( $this->getFlatRoutes() as $name => $options ) {

            // Get route by name with module prefix
            $route = app('cms.helpers.route')
                ->makeLocalizedRoute($name, $locale, 'module');

            // Boot module route
            $this->bootModuleRoute($name, $route, $options, $locale);
        }
    }

    public function bootModuleRoute($name, $route, $options, $locale = '')
    {
        if ( ! isset($options['method']) ) {
            throw new Exception('Method in ' . $name . ' not given!');
        }

        if ( ! isset($options['uses']) ) {
            throw new Exception('Controller in ' . $name . ' not given!');
        }

        // Make localized name
        $name = app('cms.helpers.route')
            ->makeLocalizedName($name, $locale);

        if ( $options['method'] === 'resource' ) {

            $name = app('cms.helpers.route')
                ->makeResourceName($name);

            app('router')->resource($route, $options['uses'],
                array_merge(['as' => $name], $options));

            return $this;
        }

        app('router')->addRoute(strtoupper($options['method']), $route,
            array_merge(['as' => $name], $options));

        return $this;
    }

    public function registerMenu($menu)
    {
        $this->menus->push($menu);
    }

    public function bootMenuRoutes()
    {
        foreach ( $this->menus as $menu ) {
            $this->bootLocalizedMenuRoutes($menu);
        }
    }

    public function bootLocalizedMenuRoutes($menu)
    {
        $options = $this->getFlatRoutes()->get($menu->module);

        if ( $options === null ) {
            return;
        }

        // Get all locales from app
        $locales = app()->getAllowedLocales();

        if ( ! preg_match('/{locale}/', $menu->route) ) {
            $locales = app('cms.helpers.route')->findLocales($menu->route);
        }

        foreach ( $locales ?: (array) app()->getLocale() as $locale ) {

            // Replace domain in route
            $domain = app('cms.helpers.route')->replaceDomain(
                app('cms.helpers.route')->extractDomain($menu->route)
            );

            // Replace domain in route
            $route = app('cms.helpers.route')->replaceLocale(
                app('cms.helpers.route')->extractRoute($menu->route), $locale
            );

            $options = array_merge([
                'domain' => $domain
            ], $options);

            // Boot module route
            $this->bootModuleRoute($menu->module, $route, $options, $locale);

        }

        return;
    }



}
