<?php

namespace Liro\Module;

use Illuminate\Support\ServiceProvider;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ( empty($this->app['web.manager']) ) {
            throw new \Exception('Web Manager not initialized.');
        }

        $this->app->singleton('web.module', function($app) {
            return new ModuleManager($app);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app['web.module']->boot();
    }

}
