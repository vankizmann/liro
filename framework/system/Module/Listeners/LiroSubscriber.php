<?php

namespace Liro\System\Module\Listeners;

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
    public function subscribe($events)
    {
        $events->listen('init: Liro\System\Factory\Liro', function() use ($events) {
            $this->app->singleton('module', 'Liro\System\Module\Module');
        });

        $events->listen('mode: Liro\System\Factory\Liro', function() use ($events) {
            $this->app->get('module')->init();
            $events->fire('init: Liro\System\Module\Module');
        });

        $events->listen('load: Liro\System\Factory\Liro', function() use ($events) {
            $this->app->get('module')->boot();
            $events->fire('boot: Liro\System\Module\Module');
        });
    }

}
