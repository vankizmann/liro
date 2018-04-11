<?php

namespace App\Factory\Middleware;

use Illuminate\Foundation\Application;

class Javascript
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle($request, $next)
    {
        /**
         * Import bootstrap js
         */
        $this->app['cms.asset']->linkJs(
            'cms.bootstrap', "/app/resource/dist/js/bootstrap.js", [], true
        );

        /**
         * Create vue application
         */
        $this->app['cms.asset']->linkJs(
            'cms.app', '/app/resource/dist/js/app.js', ['cms.bootstrap']
        );

        return $next($request);
    }

}