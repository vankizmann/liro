<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class ExportLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        $path = str_join('/', $module->path, 'exports.php');

        if ( ! file_exists($path) ) {
            return $module;
        }

        app('cms.assets')->export($module->name, include $path);

        return $module;
    }

}
