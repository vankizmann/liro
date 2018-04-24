<?php

namespace Liro\System\Factory\Handler;

use Illuminate\Contracts\Foundation\Application;

class RouteHandler
{
    /**
     * Application instance.
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Store application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function setLocaleInUrl()
    {
        $this->app->get('url')->defaults([
            'locale' => $this->app->get('liro.factory')->getLocale()
        ]);
    }

    public function forgetLocaleInRoute()
    {
        $this->app->get('request')->route()->forgetParameter('locale');
    }

}

