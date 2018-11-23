<?php

namespace Liro\System\Menus\Registrar;

use Illuminate\Support\Collection;

class RouteRegistrar
{
    /**
     * Modules containing routes
     *
     * @var Illuminate\Support\Collection
     */
    protected $modules;

    /**
     * Initialize collection
     */
    public function __construct()
    {
        $this->modules = new Collection;
    }

    /**
     * Set route inside modules
     *
     * @param string $module
     * @param string $route
     * @param array $options
     * @return void
     */
    public function setRoute($module, $route, $options)
    {
        // Get module or create new collection
        $collection = $this->modules->get($module, new Collection);

        $collection->put(
            $route, new Collection([
                'alias' => $route, 'name' => $options[0], 'uses' => $options[1]
            ])
        );

        $this->modules->put($module, $collection);
    }

    /**
     * Get route from flattened modules
     *
     * @param string $route
     * @return Illuminate\Support\Collection
     */
    public function getRoute($route)
    {
        return $this->getRoutes()->get($route, null);
    }

    /**
     * Get all routes from modules
     *
     * @return Illuminate\Support\Collection
     */
    public function getRoutes()
    {
        return $this->modules->flatMap(function ($route) {
            return $route;
        });
    }

    /**
     * Get only routes as frontend array
     *
     * @return Illuminate\Support\Collection
     */
    public function getRoutesArray()
    {
        return $this->modules->flatMap(function ($routes) {
            return $routes->map(function ($route) {
                return [
                    'label' => $route->trans('name'), 'value' => $route->get('alias')
                ];
            });
        });
    }

    /**
     * Get modules with routes
     *
     * @return Illuminate\Support\Collection
     */
    public function getModuleAliases()
    {
        return $this->modules->map(function ($routes) {
            return $routes->map(function ($route) {
                return $route->get('alias');
            });
        });
    }

    /**
     * Get modules with names
     *
     * @return Illuminate\Support\Collection
     */
    public function getModuleNames()
    {
        return $this->modules->map(function ($routes) {
            return $routes->map(function ($route) {
                return $route->trans('name');
            });
        });
    }

    /**
     * Get modules with names
     *
     * @return Illuminate\Support\Collection
     */
    public function getModuleUses()
    {
        return $this->modules->map(function ($routes) {
            return $routes->map(function ($route) {
                return $route->get('uses');
            });
        });
    }

}
