<?php

namespace Liro\System\Menu\Listeners;

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
        $events->listen('init: Liro\System\Factory\Liro', function() {
            $this->app->make('Liro\System\Menu\MenuLoader')->init();
        });

        $events->listen('boot: Liro\System\Factory\Liro', function() {
            $this->app->make('Liro\System\Menu\MenuRegistrar')->init();
        });
    }

}
