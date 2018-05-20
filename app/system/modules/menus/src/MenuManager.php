<?php

namespace Liro\System\Menus;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Menus\Models\Menu;
use Liro\System\Menus\Models\MenuType;
use Liro\System\Menus\Helpers\Walker;

class MenuManager implements \IteratorAggregate
{
    /**
     * Application instance
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    protected $groups = [];

    protected $routes = [];

    protected $handlers = [];

    protected $registerd = [];

    protected $menus = [];

    protected $types = [];

    /**
     * Initialize application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function getIterator()
    {
        return new \ArrayIterator($this->menus);
    }

    public function register()
    {
        $this->menus = Menu::getEnabled()->get();
        $this->types = MenuType::all();

        return $this;
    }

    public function load()
    {
        foreach ( $this->routes as $name => $route ) {
            $this->app->call($route['handler'], [
                $this->app['router']->prefix("_{$name}")->name($name)
            ]);
        }

        foreach ($this->menus as $menu) {

            if ( ! isset($this->routes[$menu->package]) ) {
                continue;
            }

            $this->app->call($this->routes[$menu->package]['handler'], [
                $this->app['router']->prefix($menu->prefixRoute)->name($menu->package), $menu
            ]);
        }

        return $this;
    }

    public function appendGroup($group, $options = [])
    {
        $this->groups[$group] = array_merge([
            'name' => $group
        ], $options);
    }

    public function appendRoute($route, $options = [])
    {
        $this->routes[$route] = array_merge([
            'name'          => $route,
            'hidden'        => false
        ], $options);
    }

    public function getRouteNames($hidden = null, $group = null)
    {
        $routes = collect($this->routes);

        if ( isset($hidden) ) {
            $routes = $routes->where('hidden', $hidden);
        }

        if ( isset($group) ) {
            $routes = $routes->where('group', $group);
        }

        $result = [];

        foreach ($routes as $route => $options) {
            $result[] = $route;
        }

        return collect($result);
    }

    public function getRouteNamesAssoc($hidden = null, $group = null)
    {
        $routes = collect($this->routes);

        if ( isset($hidden) ) {
            $routes = $routes->where('hidden', $hidden);
        }

        if ( isset($group) ) {
            $routes = $routes->where('group', $group);
        }

        $result = [];

        foreach ($routes as $route => $options) {
            $result[$route] = trans($options['title']);
        }

        return collect($result);
    }

    public function getRouteNamesList($hidden = null, $group = null)
    {
        $routes = collect($this->routes);

        if ( isset($hidden) ) {
            $routes = $routes->where('hidden', $hidden);
        }

        if ( isset($group) ) {
            $routes = $routes->where('group', $group);
        }

        $result = [];

        foreach ($routes as $route => $options) {
            $result[] = [
                'label'         => trans($options['title']),
                'value'         => $options['name'],
                'group'         => $options['group'],
                'hidden'        => $options['hidden']
            ];
        }

        return collect($result);
    }

    public function getRouteGroups($hidden = null)
    {
        $result = [];

        foreach ($this->groups as $group => $options) {
            $result[] = [
                'label'         => $options['title'],
                'children'      => $this->getRouteNamesList($hidden, $group)->toArray()
            ];
        }

        return collect($result);
    }

    public function get($id)
    {
        return $this->menus->find($id);
    }

    public function all()
    {
        return $this->menus;
    }

    public function type($id)
    {
        return Menu::getType($id)->get();
    }

    public function current()
    {
        $menus = $this->menus->where(
            'prefix_route', $this->app['router']->current()->uri()
        );

        if ( $menus->count() ) {
            return $menus->first();
        }

        $menus = $this->menus->where(
            'package', $this->app['router']->currentRouteName()
        );

        if ( $menus->count() ) {
            return $menus->first();
        }

        return null;
    }

    public function currentRoot()
    {
        return $this->menus->where('active', true)->where('parent_id', null)->first();
    }

    public function query($key, $default = null)
    {
        return isset($this->current()->query[$key]) ? $this->current()->query[$key] : $default;
    }
}
