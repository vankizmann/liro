<?php

namespace  Liro\Extension\Users\Http\Middleware;

use Illuminate\Http\Request;
use Liro\Extension\Users\Exceptions\PolicyException;

class ControllerGuard
{

    public function handle(Request $request, $next)
    {
        $split = explode('@', app('router')->getCurrentRoute()->getActionName());

        if( ! auth()->hasPolicyAction(...$split) ) {
            throw new PolicyException('Access to ' . $split[0] . '@' . $split[1] . ' not granted.', 403);
        }

        return $next($request);
    }
}
