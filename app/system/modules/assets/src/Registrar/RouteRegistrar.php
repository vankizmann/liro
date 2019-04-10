<?php

namespace Liro\System\Assets\Registrar;

use Illuminate\Support\Collection;

class RouteRegistrar
{
    /**
     * Route storage
     *
     * @var \Illuminate\Support\Collection
     */
    protected $routes;

    /**
     * Initialize collection
     */
    public function __construct()
    {
        $this->routes = new Collection;
    }

    /**
     * Add routes by name
     *
     * @param string $name
     * @return void
     */
    public function addByName($name)
    {
        // Get real locale names
        $namePattern = str_replace(
            '\*', '(.*)', preg_quote( app('menus')->addKeyLocale($name) )
        );

        // Get all routes from router
        $routeNames = app('router')->getRoutes()->getRoutesByName();

        foreach ( $routeNames as $routeName => $route) {
            if ( preg_match('/^' . $namePattern . '\:\:.*$/', $routeName) ) {
                $this->routes->put( app('menus')->removeKeyLocale($routeName), app('url')->to($route->uri) );
            }
        }

        return;
    }

    /**
     * Add many routes by name
     *
     * @param array $names
     * @return void
     */
    public function addByNames($names)
    {
        collect($names)->each(function ($name) {
            $this->addByName($name);
        });
    }

    /**
     * Get all routes from collection
     *
     * @return \Illuminate\Support\Collection
     */
    public function all()
    {
        return $this->routes;
    }

}
