<?php

namespace Liro\System\Modules\Loaders;

class EventLoader implements LoaderInterface
{

    public function load($module)
    {
        foreach ($module->config('events', []) as $event => $handler) {
            app('events')->listen($event, $handler);
        }

        return $module;
    }

}
