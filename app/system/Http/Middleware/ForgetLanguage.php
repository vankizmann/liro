<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Application;

class ForgetLanguage
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle($request, $next)
    {
        $this->app->get('url')->defaults([
            'lang' => $this->app->getLocale()
        ]);

        $request->route()->forgetParameter('lang');

        return $next($request);
    }

}