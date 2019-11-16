<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\ModulePrototype;

class MiddlewareLoader implements LoaderInterface
{

    public function load(ModulePrototype $module)
    {
        foreach ($module->get('middleware', []) as $name => $handler) {
            app('router')->aliasMiddleware($name, $handler);
        }

        return $module;
    }

}
