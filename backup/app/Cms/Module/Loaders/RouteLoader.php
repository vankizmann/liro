<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class RouteLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        $path = str_join('/', $module->path, 'routes.php');

        if ( ! file_exists($path) ) {
            return $module;
        }

        app('cms.routes')->registerRoute($module->name, include $path);

        return $module;
    }

}
