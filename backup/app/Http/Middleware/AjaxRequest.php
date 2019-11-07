<?php

namespace Liro\System\Http\Middleware;

use Illuminate\Http\Request;

class AjaxRequest
{
    public function handle(Request $request, $next)
    {
        if( ! $request->ajax() && ! $request->json() ) {
            return abort(401, 'This action is unauthorized.');
        }

        return $next($request);
    }
}
