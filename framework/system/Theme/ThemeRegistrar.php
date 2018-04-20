<?php

namespace Liro\System\Theme;

use Illuminate\Contracts\Foundation\Application;

class ThemeRegistrar
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
        $this->app->get('events')->fire('init: Liro\System\Theme\ThemeRegistrar', $this);
    }

}
