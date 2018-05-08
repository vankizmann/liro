<?php

namespace Liro\Users\Middleware;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class CheckUserRoute
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle(Request $request, $next, $route = null)
    {
        if ( ! $route ) {
            $route = $request->route()->getName();
        }

        $routes = explode(',', $route);

        if ( ! $request->user() || ! $request->user()->hasRoutes($routes) ) {

            if ( $request->ajax() ) {
                return abort(401, 'This action is unauthorized.');
            }

            return redirect()->route('liro-users.backend.auth.login')->with('error', 'This action is unauthorized.');
        }

        return $next($request);
    }
}
