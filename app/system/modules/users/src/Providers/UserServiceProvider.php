<?php

namespace Liro\Extension\Users\Providers;

use Illuminate\Auth\SessionGuard;
use Illuminate\Support\ServiceProvider;
use Liro\Extension\Users\Middlewares\ControllerGuard;

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
                return auth()->user()->getPolicyDepth($class);
            }

            return $fallback;
        });

        SessionGuard::macro('hasPolicyAction', function ($class, $action, $fallback = false) {

            if ( ! auth()->guest() ) {
                return auth()->user()->hasPolicyAction($class, $action);
            }

            return $fallback;
        });

        app('router')->middleware('guard', ControllerGuard::class);
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
