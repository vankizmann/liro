<?php

namespace System\Users\Events;

use Illuminate\Contracts\Foundation\Application;

class LiroSubscriber
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

    /**
     * Register the listeners for the subscriber.
     *
     * @param  Illuminate\Events\Dispatcher  $events
     */
    public function subscribe()
    {
        $backendRoute = $this->app['liro.menu']->getBackendRoute();

        $this->app['router']->prefix("{locale}/{$backendRoute}")->group(function() {
            $this->app['router']->get('login', [
                'as' => 'backend.user.login',
                'use' => 'System\User\Controllers\Backend\AuthController@form'
            ]);
        });

        // $frontendRoute = $this->app['liro.menu']->getBackendRoute();

        // $this->app['router']->prefix($frontendRoute)->group(function() {
        //     $this->app['router']->get('login', [
        //         'as' => 'frontend.user.login',
        //         'use' => 'System\User\Controllers\Frontend\AuthController@form'
        //     ]);
        // });
    }

}
