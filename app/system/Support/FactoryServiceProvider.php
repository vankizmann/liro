<?php

namespace App\Support;

use Illuminate\Support\ServiceProvider;

class FactoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('factory', function ($app) {
            return new Factory($app);
        });

        $this->app->factory->boot();
    }

}