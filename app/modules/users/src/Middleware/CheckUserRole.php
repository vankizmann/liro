<?php

namespace Liro\Users\Middleware;

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
        $roles = explode(',', $role);

        if ( ! $request->user() || ! $request->user()->hasRoles($roles) ) {

            if ( $request->ajax() ) {
                return response()->json([ 'message' => 'This action is unauthorized.' ], 401);
            }

            return redirect()->route('liro-users.frontend.auth.login')->with('error', 'This action is unauthorized.');
        }

        return $next($request);
    }
}
