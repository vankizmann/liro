<?php

namespace Liro\System\Users\Middleware;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Auth\Access\AuthorizationException;

class CheckUserRoleRoute
{

    public function handle(Request $request, $next)
    {
        $route = app('menus')->getActiveRouteName();

        if ( ! app('users')->hasRoute($route) ) {
            throw new AuthorizationException;
        }

        return $next($request);
    }

}
