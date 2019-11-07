<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class MigrationLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        $path = str_join('/', $module->path, 'migrations.php');

        if ( ! file_exists($path) ) {
            return $module;
        }

        $module->set('migrations', include $path);

        return $module;
    }

}
