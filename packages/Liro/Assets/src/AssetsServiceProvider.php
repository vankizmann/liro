<?php

namespace Liro\Assets;

use Illuminate\Support\ServiceProvider;

class AssetsServiceProvider extends ServiceProvider
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

        $this->app->singleton('web.assets', function($app) {
            return new AssetsManager($app);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app['web.assets']->boot();
    }

}
