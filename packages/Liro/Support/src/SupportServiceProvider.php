<?php

namespace Liro\Support;

use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;
use Liro\Support\Extensions\BladeDirectives;
use Liro\Support\Extensions\CollectionMacros;

class SupportServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Extend laravel default collection.
        Collection::mixin(new CollectionMacros);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        foreach ( get_class_methods(BladeDirectives::class) as $method) {
            $this->app['blade.compiler']->extend([BladeDirectives::class, $method]);
        }
    }

}
