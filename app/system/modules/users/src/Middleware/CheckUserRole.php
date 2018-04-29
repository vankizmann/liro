<?php

namespace Liro\System\Users\Middleware;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class CheckUserRole
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle(Request $request, $next, $role)
    {
        if ( ! $request->user() || ! $request->user()->hasRole($role) ) {
            return redirect()->route('backend.login')->with('message', 'This action is unauthorized.');
        }

        return $next($request);
    }
}
