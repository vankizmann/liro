<?php

namespace Liro\System\Modules\Loaders;

class MiddlewareLoader implements LoaderInterface
{

    public function load($module)
    {
        foreach ($module->config('middleware', []) as $name => $handler) {
            app('router')->aliasMiddleware($name, $handler);
        }

        return $module;
    }

}
