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
        $this->modules = new Collection([
            'ajax' => new Collection, 'admin' => new Collection, 'user' => new Collection
        ]);
    }

    public function flatMap($route)
    {
        return $route;
    }

    public function setAjaxRoute($module, $route, $options)
    {
        $collection = $this->modules['ajax']->get($module, new Collection);

        $collection->put($route, new Collection([
            'alias' => $route, 'name' => $options[0], 'uses' => $options[1]
        ]));

        $this->modules['ajax']->put($module, $collection);
    }

    public function setAdminRoute($module, $route, $options)
    {
        $collection = $this->modules['admin']->get($module, new Collection);

        $collection->put($route, new Collection([
            'alias' => $route, 'name' => $options[0], 'uses' => $options[1]
        ]));

        $this->modules['admin']->put($module, $collection);
    }

    public function setUserRoute($module, $route, $options)
    {
        $collection = $this->modules['user']->get($module, new Collection);

        $collection->put($route, new Collection([
            'alias' => $route, 'name' => $options[0], 'uses' => $options[1]
        ]));

        $this->modules['user']->put($module, $collection);
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
        // Replace ajax match
        $route = preg_replace('/^ajax@/', '', $route, -1, $ajaxMatch);

        if ( $ajaxMatch ) {
            return $this->setAjaxRoute($module, $route, $options);
        }

        // Replace admin match
        $route = preg_replace('/^admin@/', '', $route, -1, $adminMatch);

        if ( $adminMatch ) {
            return $this->setAdminRoute($module, $route, $options);
        }

        // Replace user match
        $route = preg_replace('/^user@/', '', $route, -1, $userMatch);

        return $this->setUserRoute($module, $route, $options);
    }

    /**
     * Get route from flattened modules
     *
     * @param string $route
     * @return Illuminate\Support\Collection
     */
    public function getRoute($route, $types = null)
    {
        return $this->getRoutes($types)->get($route, null);
    }

    /**
     * Get all routes from modules
     *
     * @return Illuminate\Support\Collection
     */
    public function getRoutes($types = null)
    {
        return $this->modules->only($types ?: ['ajax', 'admin', 'user'])->flatMap(function ($module) {
            return $module->flatMap([$this, 'flatMap']);
        });
    }

    /**
     * Get only routes as frontend array
     *
     * @return Illuminate\Support\Collection
     */
    public function getRoutesArray($types = null)
    {
        return $this->getRoutes($types)->map(function ($route) {
            return new Collection([
                'label' => $route->trans('name'), 'value' => $route->get('alias')
            ]);
        });
    }

    /**
     * Get modules with routes
     *
     * @return Illuminate\Support\Collection
     */
    public function getModuleAliases($types = null)
    {
        return $this->modules->only($types ?: ['ajax', 'admin', 'user'])->map(function ($module) {
            return $module->map(function ($route) {
                return $route->get('alias');
            });
        });
    }

    /**
     * Get modules with names
     *
     * @return Illuminate\Support\Collection
     */
    public function getModuleNames($types = null)
    {
        return $this->modules->only($types ?: ['ajax', 'admin', 'user'])->map(function ($type) {
            return $type->map(function ($module) {
                return $module->map(function ($route) {
                    return $route->trans('name');
                });
            });
        });
    }

    /**
     * Get modules with names
     *
     * @return Illuminate\Support\Collection
     */
    public function getModuleUses($types = null)
    {
        return $this->modules->only($types ?: ['ajax', 'admin', 'user'])->map(function ($module) {
            return $module->map(function ($route) {
                return $route->get('uses');
            });
        });
    }

}
