<?php

namespace Liro\System\Http\Middleware;

use Illuminate\Http\Request;

class EnableGuarded
{
    public function handle(Request $request, $next)
    {
        app('cms')->enableGuarded();

        return $next($request);
    }
}
