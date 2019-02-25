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
        $this->routes->each([$this, 'bootModule']);
        $this->menus->each([$this, 'bootMenu']);
    }

    public function register($name, $options)
    {
        $this->routes->put($name, $options);
    }

    public function bootModule($routes)
    {
        collect($routes)->each([$this, 'bootModuleRoute']);
    }

    public function bootModuleRoute($option, $name)
    {
        $route = str_join('/', 'modules', ...explode('.', $name));

        foreach ( $option['methods'] as $method ) {

            $alias = $method === 'resource' ?
                preg_replace('/\.[^\.]+$/', '', $name) : $name;

            app('router')->name($alias)->$method(
                $route, $option['controller'], @$option['options'] ?: []
            );
        }

        return $route;
    }

    public function registerMenu($menu)
    {
        $this->menus->push($menu);
    }

    public function bootMenu($menu)
    {
        $option = $this->getFlatRoutes()->get($menu->module);

        if ( $option === null ) {
            return;
        }

        foreach ( $option['methods'] as $method ) {

            $alias = $method === 'resource' ?
                preg_replace('/\.[^\.]+$/', '', $menu->module) : $menu->module;

            app('router')->name($alias)->$method(
                $menu->route, $option['controller'], @$option['options'] ?: []
            );
        }

        return $menu->route;
    }



}
