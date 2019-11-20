<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\Module;

class TranslationLoader implements LoaderInterface
{

    public function load(Module $module)
    {
        $path = str_join('/', $module->path, 'resources/lang');

        if ( ! file_exists($path) ) {
            return $module;
        }

        app('translator')->addNamespace($module->name, $path);

        return $module;
    }

}
