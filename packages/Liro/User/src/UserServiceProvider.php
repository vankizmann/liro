<?php

namespace Liro\User;

use Illuminate\Support\ServiceProvider;
use Liro\Support\Application\AppHelper;

class UserServiceProvider extends ServiceProvider
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

        $this->loadMigrationsFrom([
            __DIR__.'/../database/migrations'
        ]);

        $this->app->singleton('web.user', function($app) {
            return new UserManager($app);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if ( AppHelper::commandIsActive('migrate') ) {
            return;
        }

        $this->app['web.user']->boot();
    }

}
