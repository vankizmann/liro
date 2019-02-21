<?php

namespace Liro\System\Modules\Module\Loaders;

use Liro\System\Modules\Module\BaseModule;

class MiddlewareLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        foreach (@$module['middleware'] ?: [] as $name => $handler) {
            app('router')->aliasMiddleware($name, $handler);
        }

        return $module;
    }

}
