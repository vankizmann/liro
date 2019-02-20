<?php

namespace Liro\System\Menus\Registrar;

use Illuminate\Support\Collection;
use Liro\System\Exceptions\Exception;

class RouteRegistrar
{
    /**
     * Modules containing routes
     *
     * @var \Illuminate\Support\Collection
     */
    protected $modules;

    /**
     * Initialize collection
     */
    public function __construct()
    {
        $this->modules = new Collection();
    }

    protected function mergeOptions($route, $options)
    {
        if ( ! isset($options['controller']) ) {
            throw new Exception("Controller not defined for route \"{$route}\"");
        }

        return array_merge([ 'methods' => ['get'], 'options' => [] ], $options);
    }

    public function setRoute($module, $route, $options)
    {
        /* @var Collection $collection */
        $collection = $this->modules->get(
            $module, new Collection
        );

        $collection->put(
            $route, $this->mergeOptions($route, $options)
        );

        $this->modules->put($module, $collection);
    }

    public function getRoute($route)
    {
        return $this->getRoutes()->get($route, null);
    }

    public function getRoutes()
    {
        return $this->modules->flatMap(function ($module) {
            /* @var \Illuminate\Support\Collection $module */
            return $module;
        });
    }

    /**
     * Get only routes as frontend array
     *
     * @param array $types
     * @return \Illuminate\Support\Collection
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
     * @param array $types
     * @return \Illuminate\Support\Collection
     */
    public function getModuleAliases($types = null)
    {
        return $this->modules->only($types ?: ['user', 'admin', 'ajax', 'hide'])->map(function ($module) {
            return $module->map(function ($route) {
                return $route->get('alias');
            });
        });
    }

    /**
     * Get modules with names
     *
     * @param array $types
     * @return \Illuminate\Support\Collection
     */
    public function getModuleNames($types = null)
    {
        return $this->modules->only($types ?: ['user', 'admin', 'ajax', 'hide'])->map(function ($type) {
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
     * @param array $types
     * @return \Illuminate\Support\Collection
     */
    public function getModuleUses($types = null)
    {
        return $this->modules->only($types ?: ['user', 'admin', 'ajax', 'hide'])->map(function ($module) {
            return $module->map(function ($route) {
                return $route->get('uses');
            });
        });
    }

}
