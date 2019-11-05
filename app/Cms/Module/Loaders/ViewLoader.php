<?php

namespace Liro\System\Cms\Module\Loaders;

use Illuminate\Support\Facades\View;
use Liro\System\Cms\Module\BaseModule;

class ViewLoader implements LoaderInterface
{

    public function load(BaseModule $module)
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