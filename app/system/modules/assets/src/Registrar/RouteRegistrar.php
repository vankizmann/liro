<?php

namespace Liro\System\Assets\Registrar;

use Illuminate\Support\Collection;

class RouteRegistrar
{
    /**
     * Route storage
     *
     * @var Illuminate\Support\Collection
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
        $route = app('router')->getRoutes()->getByName(
            app('menus')->addKeyLocale($name)
        );

        if ( $route == null ) {
            throw new \Exception("Route with given name does not exist: $name");
        }

        $this->routes->put(
            $name, app('url')->to($route->uri())
        );
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
     * @return Illuminate\Support\Collection
     */
    public function all()
    {
        return $this->routes;
    }

}
