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
            'cms.bootstrap', "/app/resource/dist/js/bootstrap.js", []
        );

        /**
         * Create vue application
         */

        $this->app['cms.asset']->linkJs(
            'cms.app', '/app/resource/dist/js/app.js', ['cms.bootstrap']
        );

        /**
         * 
         */

        $messages = [
            'cms' =>  $this->app['translator']->getFromJson('*.cms', [])
        ];

        $this->app['cms.asset']->plainJs('cms.lang', "liro.setMessages(liro.getLocale(), ".json_encode($messages).");", ['cms.bootstrap']);

        return $next($request);
    }

}