<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\Module;

class MigrationLoader implements LoaderInterface
{

    public function load(Module $module)
    {
        $path = str_join('/', $module->path, 'database/migrations');

        if ( ! file_exists($path) ) {
            return $module;
        }

        app()->afterResolving('migrator', function ($migrator) use ($path) {
            $migrator->path($path);
        });


        return $module;
    }

}
