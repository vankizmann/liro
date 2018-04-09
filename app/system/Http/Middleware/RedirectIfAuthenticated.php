<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Application;

class RedirectIfAuthenticated
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle($request, $next)
    {
        if ( $request->user() ) {
            return redirect()->route('home.index');
        }

        return $next($request);
    }
}