<?php

namespace Liro\System\Cms\Asset;

use Liro\System\Support\Collection;

class RouteAsset implements AssetInterface
{

    public function __construct()
    {
        //
    }

    public function add($name, $options)
    {
        //
    }

    public function render()
    {
        // Get all routes from router
        $routes = new Collection();

        foreach ( app('router')->getRoutes()->getRoutesByName() as $routeName => $route) {
            $routes->put(app('cms.routes.helper')->removeLocale($routeName), app('url')->to($route->uri));
        }

        return '<script>window._Routes = ' . $routes->toJson() . ';</script>';
    }

}
