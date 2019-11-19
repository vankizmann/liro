<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\Module;

class MiddlewareLoader implements LoaderInterface
{

    public function load(Module $module)
    {
        foreach ($module->get('middleware', []) as $name => $handler) {
            app('router')->aliasMiddleware($name, $handler);
        }

        return $module;
    }

}
