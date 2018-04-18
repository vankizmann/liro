<?php

namespace App\Factory\Language\Listeners;

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
        $this->app->make('App\Factory\Language\LanguageFactory');
    }

}

