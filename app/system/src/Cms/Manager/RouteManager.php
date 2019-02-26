<?php

namespace Liro\System\Cms\Manager;

use Illuminate\Support\Collection;

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
        foreach ( app()->getAllowedLocales() as $locale ) {
            $this->bootModules($locale);
        }

        foreach ( app()->getAllowedLocales() as $locale ) {
            $this->bootMenus($locale);
        }
    }

    public function registerRoute($name, $options)
    {
        $this->routes->put($name, $options);
    }

    public function bootModules($locale)
    {
        foreach ( $this->getFlatRoutes() as $name => $options ) {
            call_user_func([$this, 'bootModuleRoute'], $name, $options, $locale);
        }
    }

    public function bootModuleRoute($name, $options, $locale = '')
    {
        $route = str_join('/', $locale, 'modules', ...explode('.', $name));

        if ( ! isset($options['methods']) ) {
            $options['methods'] = ['any'];
        }

        $name = str_join('.', $locale, $name);

        foreach ( $options['methods'] as $method ) {

            $alias = $method === 'resource' ?
                preg_replace('/\.[^\.]+$/', '', $name) : $name;

            app('router')->name($alias)->$method(
                $route, $options['controller'], @$options['options'] ?: []
            );
        }

        return $route;
    }

    public function registerMenu($menu)
    {
        $this->menus->push($menu);
    }

    public function bootMenus($locale)
    {
        foreach ( $this->menus as $menu ) {
            call_user_func([$this, 'bootMenuRoute'], $menu->module, $menu, $locale);
        }
    }

    public function bootMenuRoute($name, $menu, $locale = '')
    {
        $replacements = [
            ['{locale}', '{domain}'], [app()->getLocale(), app()->getDomain()]
        ];

        $route = str_replace($replacements[0], $replacements[1], $menu->route);

        $options = $this->getFlatRoutes()->get($menu->module);

        if ( $options === null ) {
            return null;
        }

        $name = str_join('.', $locale, $name);

        foreach ( $options['methods'] as $method ) {

            $alias = $method === 'resource' ?
                preg_replace('/\.[^\.]+$/', '', $name) : $name;

            app('router')->name($alias)->$method(
                $route, $options['controller'], @$options['options'] ?: []
            );
        }

        return $menu->route;
    }



}
