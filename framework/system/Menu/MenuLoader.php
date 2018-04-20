<?php

namespace Liro\System\Menu;

use Illuminate\Contracts\Foundation\Application;

class MenuLoader
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
        $this->app->get('liro')->setMode('backend');
        $this->app->get('events')->fire('init: Liro\System\Menu\MenuLoader', $this);
    }

}
