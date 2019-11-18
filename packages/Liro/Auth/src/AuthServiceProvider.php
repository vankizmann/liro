<?php

namespace Liro\Auth;

use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
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

//        $this->mergeConfigFrom(
//            __DIR__.'/../config/module.php', 'module'
//        );

        $this->loadMigrationsFrom([
            __DIR__.'/../database/migrations'
        ]);

//        $this->app->singleton('web.module', function($app) {
//            return new AuthManager($app);
//        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
//        $this->publishes([
//            __DIR__.'/../config/web.php' => config_path('web.php'),
//        ]);
//
//        $this->app['web.module']->boot();
    }

}
