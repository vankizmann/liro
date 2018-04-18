<?php

namespace App\Factory\Middleware;

use Illuminate\Foundation\Application;

class Locale
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle($request, $next)
    {
        $this->app['cms.locale']->setUrlLocale()->setViewLocale()->removeLocaleFromRoute();
        return $next($request);
    }
}