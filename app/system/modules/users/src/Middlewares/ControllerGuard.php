<?php

namespace  Liro\Extension\Users\Middlewares;

use Illuminate\Http\Request;

class ControllerGuard
{
    public function handle(Request $request, $next)
    {
        ddc($request, app('router'));

        if( ! $request->ajax() && ! $request->json() ) {
            return abort(401, 'This action is unauthorized.');
        }

        return $next($request);
    }
}
