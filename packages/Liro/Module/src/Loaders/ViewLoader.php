<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\ModulePrototype;
use Illuminate\Support\Facades\View;

class ViewLoader implements LoaderInterface
{

    public function load(ModulePrototype $module)
    {
        $path = str_join('/', $module->path, 'views');

        if ( $module->type === 'theme' ) {

            foreach ( View::getFinder()->getHints() as $namespace => $hint ) {
                View::prependNamespace($namespace,
                    str_join('/', $path, 'vendor', $namespace));
            }

            app('view')->addLocation($path);
        }

        app('view')->addNamespace($module->name, $path);

        return $module;
    }

}
