<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Support\Factory;
use App\Package\PackageServiceProvider;
use App\Factory\FactoryServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->singleton('factory', function ($app) {
            return new Factory($app);
        });

        $this->app->factory->boot();

        // $this->app->register(PackageServiceProvider::class);
        // $this->app->register(FactoryServiceProvider::class);
        // $this->app->get('cms.factory')->boot();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // 
    }
}
