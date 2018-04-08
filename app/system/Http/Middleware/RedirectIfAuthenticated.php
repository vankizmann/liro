<?php

namespace App\Http\Middleware;

class RedirectIfAuthenticated
{
    public function handle($request, $next)
    {
        if ( $request->user() ) {
            return redirect()->route('menus.index');
        }

        return $next($request);
    }
}