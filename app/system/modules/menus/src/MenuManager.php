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

    public function type($id)
    {
        return Menu::getType($id)->get();
    }

    public function all()
    {
        return $this->menus;
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
                $this->app['router']->prefix($menu->prefixRoute)->name($menu->package)
            ]);
        }

        return $this;
    }

    public function append($name, $handler, $prefix = '')
    {
        $this->handlers[($prefix ? "{$prefix}.{$name}" : $name)] = $handler;

        return $this;
    }

    public function appendGroup($group, $options = [])
    {
        $this->groups[$group] = $options;
    }

    public function appendRoute($route, $options = [])
    {
        $this->routes[$route] = $options;
    }

    public function getRouteNames()
    {
        $result = array_keys($this->handlers);

        return collect($result);
    }

    public function getRouteNamesAssoc()
    {
        $result = collect(array_keys($this->handlers))->reduce(function($base, $item) {
            return array_merge($base, [
                trans('*.' . $item) => $item
            ]);
        }, []);

        return collect($result);
    }

    public function getRouteNamesList()
    {
        $result = collect(array_keys($this->handlers))->reduce(function($base, $item) {
            return array_merge($base, [
                ['label' => trans('*.' . $item), 'value' => $item]
            ]);
        }, []);

        return collect($result);
    }

    public function getRouteGroups()
    {
        $result = array_reduce(array_keys($this->handlers), function($base, $item) {
            return array_merge_recursive($base, [
                preg_split('/\.[^\.]+$/', $item)[0] => [$item]
            ]);
        }, []);

        return collect($result);
    }

    public function current() {
        return $this->menus->where('package', $this->app['router']->currentRouteName())->first();
    }
}
