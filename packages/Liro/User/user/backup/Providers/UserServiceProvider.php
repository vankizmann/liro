<?php

namespace Liro\Extension\Users\Providers;

use Illuminate\Auth\SessionGuard;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Liro\Extension\Users\Http\Middleware\ControllerGuard;
use Liro\System\Cms\Facades\Web;

class UserServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        SessionGuard::macro('getUserAttr', function ($attribute, $fallback = null) {
            return Web::unguarded(function () use ($attribute, $fallback) {
                return data_get(Auth::user(), $attribute, $fallback);
            });
        });

        SessionGuard::macro('getPolicyDepth', function ($class, $fallback = 10000) {

            $user = Web::unguarded(function () {
                return Auth::user();
            });

            if ( $user !== null ) {
                return $user->getPolicyDepth($class);
            }

            return $fallback;
        });

        SessionGuard::macro('hasPolicyAction', function ($class, $action, $fallback = false) {

            $user = Web::unguarded(function () {
                return Auth::user();
            });

            if ( $user !== null ) {
                return $user->hasPolicyAction($class, $action);
            }

            return $fallback;
        });

        app('router')->aliasMiddleware('guard', ControllerGuard::class);
    }

}
