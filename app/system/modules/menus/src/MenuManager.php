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
        foreach ( $this->handlers as $name => $handler ) {
            $handler(
                $this->app['router']->prefix("_{$name}")->name($name)
            );
        }

        foreach ($this->menus as $menu) {

            if ( ! isset($this->handlers[$menu->package]) ) {
                continue;
            }

            $this->handlers[$menu->package](
                $this->app['router']->prefix($menu->prefixRoute)->name($menu->package)
            );
        }

        return $this;
    }

    public function append($name, $handler, $prefix = '')
    {
        $this->handlers[($prefix ? "{$prefix}.{$name}" : $name)] = $handler;

        return $this;
    }

    public function getRouteNames()
    {
        return collect(array_keys($this->handlers));
    }

    public function current() {
        return $this->menus->where('package', $this->app['router']->currentRouteName())->first();
    }
}
