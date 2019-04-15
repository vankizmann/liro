<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Support\Collection;

class RouteAsset implements AssetInterface
{

    protected $routes;

    public function __construct()
    {
        $this->routes = new Collection();
    }

    public function add($name, $options)
    {
        //
    }

    public function render()
    {
        // Get all routes from router
        $routes = app('router')->getRoutes()->getRoutesByName();

        $routes = collect($routes)->filter(function ($route, $name) {
            return explode('.', $name)[0] === app()->getLocale();
        });

        foreach ( $routes as $name => $route) {
            $this->routes->put(app('cms.routes.helper')->removeLocale($name), app('url')->to($route->uri));
        }

        return '<script>window.routes = ' . $this->routes->toJson() . ';</script>';
    }

}
