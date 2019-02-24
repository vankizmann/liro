<?php

namespace Liro\System\Cms\Manager;

use Illuminate\Support\Collection;

class RouteManager
{
    public $routes;

    public function __construct()
    {
        $this->routes = new Collection();
    }

    public function boot()
    {
        $this->routes->each([$this, 'bootModule']);
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

            if ( $method === 'resource' ) {
                $name = preg_replace('/\.[^\.]+$/', '', $name);
            }

            app('router')->name($name)->$method(
                $route, $option['controller'], @$option['options'] ?: []
            );
        }

        return $route;
    }

}
