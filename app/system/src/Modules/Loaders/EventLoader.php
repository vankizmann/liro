<?php

namespace Liro\System\Modules\Loaders;

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
        foreach ($module->config('events', []) as $event => $handler) {
            $this->app['events']->listen($event, $handler);
        }

        return $module;
    }
}
