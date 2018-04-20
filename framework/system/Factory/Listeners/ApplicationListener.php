<?php

namespace Liro\System\Factory\Listeners;

use Illuminate\Contracts\Foundation\Application;

class ApplicationListener
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

    /**
     * Call language factory.
     *
     * @return void
     */
    public function handle()
    {
        $this->app->singleton('liro', 'Liro\System\Factory\Liro');
        $this->app->get('liro')->init()->load()->boot();
    }

}

