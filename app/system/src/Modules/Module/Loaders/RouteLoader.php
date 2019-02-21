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

        foreach (include $path as $name => $options) {
            app('cms.routes')->register($name, $options);
        }

        return $module;
    }

}
