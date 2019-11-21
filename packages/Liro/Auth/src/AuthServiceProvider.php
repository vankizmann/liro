<?php

namespace Liro\Auth;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use App\Database\User;

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

        $this->loadMigrationsFrom([
            __DIR__.'/../database/migrations'
        ]);

        $this->app->singleton('web.auth', function($app) {
            return new AuthManager($app);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if ( ! Schema::hasTable(with(new User)->getTable()) ) {
            return;
        }

        $this->app['web.auth']->boot();
    }

}
