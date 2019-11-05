<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class MiddlewareLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        foreach ($module->middleware ?: [] as $name => $handler) {
            app('router')->aliasMiddleware($name, $handler);
        }

        return $module;
    }

}
