<?php

namespace Liro\System\Menus;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Menus\Models\Menu;
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

    protected function getHandler($name)
    {
        if ( isset($this->handlers[$name]) ) {
            $this->handlers[$name]($this->app);
        }

        return $this;
    }

    public function get($name)
    {
        return $this->menus->where('route', $name) ?: null;
    }

    public function all()
    {
        return $this->menus;
    }

    public function register()
    {
        $this->menus = Menu::enabled()->get()->toTree();

        return $this;
    }

    public function load()
    {
        $walker = new Walker($this->menus);

        $walker->run(function($menu, $next) {

            $this->app['router']->middleware('web')->prefix($menu->prefixRoute)->group(function() use ($menu, $next) {
                $this->getHandler($menu->package);
                $next();
            });

        });

        return $this;
    }

    public function append($name, $handler, $prefix = '')
    {
        $this->handlers[($prefix ? "{$prefix}.{$name}" : $name)] = $handler;

        return $this;
    }

}
