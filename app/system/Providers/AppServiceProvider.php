<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
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
        $this->app->register(FactoryServiceProvider::class);
        $this->app->get('cms.factory')->boot();
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
