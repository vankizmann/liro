<?php

namespace Liro\System\Http\Middleware;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class AjaxRequest
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle(Request $request, $next)
    {
        if( ! $request->ajax() ) {
            return abort(401, 'This action is unauthorized.');
        }

        return $next($request);
    }
}
