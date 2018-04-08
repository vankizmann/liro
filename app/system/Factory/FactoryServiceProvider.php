<?php

namespace App\Factory;

use Illuminate\Support\ServiceProvider;
use Symfony\Component\ClassLoader\Psr4ClassLoader;
use App\Package\PackageServiceProvider;
use App\Services\Asset;


class FactoryServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->register(PackageServiceProvider::class);

        $this->app->singleton('cms.asset', function ($app) {
            return new Asset;
        });

        $this->app->bind('cms.loader', function ($app) {
            return new Psr4ClassLoader;
        });

        $this->app->singleton('cms.factory', function ($app) {
            return new Factory($app);
        });
    }

}