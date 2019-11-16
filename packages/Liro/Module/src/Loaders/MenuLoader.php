<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\ModulePrototype;

class MenuLoader implements LoaderInterface
{

    public function load(ModulePrototype $module)
    {
        $path = str_join('/', $module->path, 'routes.php');

        if ( ! file_exists($path) ) {
            return $module;
        }

        app('cms.routes')->registerRoute($module->name, include $path);

        return $module;
    }

}
