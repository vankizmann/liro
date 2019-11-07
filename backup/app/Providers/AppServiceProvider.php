<?php

namespace Liro\System\Providers;

use Composer\Autoload\ClassLoader;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('autoloader', ClassLoader::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(255);
    }

}
