<?php

namespace App\Factory;

use Illuminate\Support\ServiceProvider;
use App\Factory\Services\Asset;
use App\Factory\Services\Locale;

class FactoryServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->bind('cms.loader', function ($app) {
            return new \Symfony\Component\ClassLoader\Psr4ClassLoader;
        });

        $this->app->singleton('cms.locale', function ($app) {
            return new Locale($app);
        });

        $this->app->singleton('cms.asset', function ($app) {
            return new Asset($app);
        });

        $this->app->singleton('cms.factory', function ($app) {
            return new Factory($app);
        });
    }

}