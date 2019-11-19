<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\Module;

class EventLoader implements LoaderInterface
{

    public function load(Module $module)
    {
        foreach ($module->get('events', []) as $event => $handler) {
            app('events')->listen($event, $handler);
        }

        return $module;
    }

}
