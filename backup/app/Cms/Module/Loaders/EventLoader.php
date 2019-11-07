<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class EventLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        foreach ($module->events ?: [] as $event => $handler) {
            app('events')->listen($event, $handler);
        }

        return $module;
    }

}
