<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\ModulePrototype;

class TranslationLoader implements LoaderInterface
{

    public function load(ModulePrototype $module)
    {
        $path = str_join('/', $module->path, 'languages');

        if ( ! file_exists($path) ) {
            return $module;
        }

        app('translator')->addNamespace($module->name, $path);

        return $module;
    }

}
