<?php

namespace Liro\Extension\Users\Providers;

use Illuminate\Auth\SessionGuard;
use Illuminate\Support\ServiceProvider;

class UserServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        SessionGuard::macro('getPolicyDepth', function ($class, $fallback = 10000) {

            if ( ! auth()->guest() ) {
                return auth()->user()->getPolicyDepth($class) ?: 0;
            }

            return $fallback;
        });

        SessionGuard::macro('hasPolicyAction', function ($class, $action, $fallback = false) {

            if ( ! auth()->guest() ) {
                return auth()->user()->hasPolicyAction($class, $action) ?: false;
            }

            return $fallback;
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

}
