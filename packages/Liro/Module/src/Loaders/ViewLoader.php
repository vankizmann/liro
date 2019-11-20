<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\Module;

class ViewLoader implements LoaderInterface
{

    public function load(Module $module)
    {
        app('view')->addNamespace($module->name,
            str_join('/', $module->path, 'resources/views'));

        return $module;
    }

}
