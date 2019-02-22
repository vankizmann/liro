<?php

namespace Liro\System\Modules\Module\Loaders;

use Liro\System\Modules\Module\BaseModule;

class RouteLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        $path = str_join('/', $module['path'], 'routes.php');

        if ( ! file_exists($path) ) {
            return $module;
        }

        app('cms.routes')->module($module['name'], include $path);

        return $module;
    }

}
