<?php

namespace Liro\System\Menu;

use Illuminate\Contracts\Foundation\Application;

class MenuRegistrar
{
    /**
     * Application instance.
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Store application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function init()
    {
        $this->app->router->get('/', function() {
            $this->app->get('debugbar')->info($this->app->events);
            return 'ENDLICH!';
        });

        $this->app->get('events')->fire('init: Liro\System\Menu\MenuRegistrar', $this);
    }
}
