<?php

namespace Liro\System\Cms\Managers;

use Illuminate\Support\Collection;
use Liro\System\Exceptions\Exception;

class RouteManager
{
    public $routes;
    public $domains;
    public $menus;

    public function __construct()
    {
        $this->routes = new Collection();
        $this->domains = new Collection();
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
        foreach ( app()->getLocales() as $locale ) {
            $this->bootLocalizedModuleRoutes($locale);
        }
    }

    public function bootLocalizedModuleRoutes($locale)
    {
        foreach ( $this->getFlatRoutes() as $name => $options ) {

            // Get route by name with module prefix
            $route = app('cms.routes.helper')
                ->makeLocalizedRoute(@$options['route'] ?: $name, $locale, 'module');

            // Boot module route
            $this->bootModuleRoute($name, $route, $options, $locale);
        }

        dd(app('router'));
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
        $name = app('cms.routes.helper')
            ->makeLocalizedName($name, $locale);

        if ( $options['method'] === 'resource' ) {

            $name = app('cms.routes.helper')
                ->makeResourceName($name);

            app('router')->resource($route, $options['uses'],
                array_merge(['as' => $name], $options));

            return $this;
        }

        app('router')->addRoute(strtoupper($options['method']), $route,
            array_merge(['as' => $name], $options));

        return $this;
    }

    public function registerDomain($domain)
    {
        $this->domains->push($domain);
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
        $locales = app()->getLocales();

        if ( ! preg_match('/{locale}/', $menu->route) ) {
            $locales = app('cms.routes.helper')->findLocales($menu->route);
        }

        foreach ( $locales ?: (array) app()->getLocale() as $locale ) {

            // Replace domain in route
            $domain = app('cms.routes.helper')->replaceDomain(
                app('cms.routes.helper')->extractDomain($menu->route)
            );

            // Replace domain in route
            $route = app('cms.routes.helper')->replaceLocale(
                app('cms.routes.helper')->extractRoute($menu->route), $locale
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
