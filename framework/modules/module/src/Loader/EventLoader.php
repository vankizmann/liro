<?php

namespace Liro\System\Module\Loader;

use Illuminate\Contracts\Foundation\Application;

class EventLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        foreach (@$module['events'] ?: [] as $event => $handler) {
            $this->app['events']->listen($event, $handler);
        }

        return $module;
    }
}