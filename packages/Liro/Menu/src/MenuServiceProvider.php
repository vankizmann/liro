<?php

namespace Liro\Menu;

use Baum\BaumServiceProvider;
use Illuminate\Support\ServiceProvider;

class MenuServiceProvider extends ServiceProvider
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

        $this->app->register(BaumServiceProvider::class);

        $this->loadMigrationsFrom([
            __DIR__.'/../database/migrations'
        ]);

        $this->app->singleton('web.menu', function($app) {
            return new MenuManager($app);
        });

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app['web.menu']->boot();
    }

}
