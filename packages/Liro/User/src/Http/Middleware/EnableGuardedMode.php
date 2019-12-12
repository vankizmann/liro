<?php

namespace Liro\User\Http\Middleware;

use Illuminate\Support\Facades\Auth;

class EnableGuardedMode
{
    public function handle($request, \Closure $next)
    {
        app('web.user')->enableGuarded();

        return $next($request);
    }
}
