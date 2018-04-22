<?php

namespace Liro\System\Factory;

use Illuminate\Contracts\Foundation\Application;

class FactoryListener
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
        $this->app->get('liro.factory')->load();
        $this->app->get('liro.factory')->boot();
    }

}

