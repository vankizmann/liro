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

            if ( array_intersect(['admin', 'editor', 'author'], $roles) ) {
                return redirect()->route('backend.users.login')->with('error', 'This action is unauthorized.');
            }

            return redirect()->route('frontend.users.login')->with('error', 'This action is unauthorized.');
        }

        return $next($request);
    }
}
