<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\ModulePrototype;

class EventLoader implements LoaderInterface
{

    public function load(ModulePrototype $module)
    {
        foreach ($module->get('events', []) as $event => $handler) {
            app('events')->listen($event, $handler);
        }

        return $module;
    }

}
