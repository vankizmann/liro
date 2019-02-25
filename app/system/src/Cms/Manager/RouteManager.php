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
            app()->call([$this, 'bootModuleRoute'], [str_join('.', $locale, $name), $options]);
        }
    }

    public function bootModuleRoute($name, $options)
    {
        $route = str_join('/', 'modules', ...explode('.', $name));

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
            app()->call([$this, 'bootMenuRoute'], [str_join('.', $locale, $menu->module), $menu]);
        }
    }

    public function bootMenuRoute($name, $menu)
    {
        $option = $this->getFlatRoutes()->get($menu->module);

        if ( $option === null ) {
            return null;
        }

        foreach ( $option['methods'] as $method ) {

            $alias = $method === 'resource' ?
                preg_replace('/\.[^\.]+$/', '', $name) : $name;

            app('router')->name($alias)->$method(
                $menu->route, $option['controller'], @$option['options'] ?: []
            );
        }

        return $menu->route;
    }



}
