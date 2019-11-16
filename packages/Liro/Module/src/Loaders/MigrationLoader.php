<?php

namespace Liro\Module\Loaders;

use Liro\Module\Module\ModulePrototype;

class MigrationLoader implements LoaderInterface
{

    public function load(ModulePrototype $module)
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
