<?php

namespace Liro\System\Modules\Module\Loaders;

use Liro\System\Modules\Module\BaseModule;

class ScriptLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        $path = str_join('/', $module['path'], 'scripts.php');

        if ( ! file_exists($path) ) {
            return $module;
        }

//        foreach (include $path as $name => $options) {
//            app('cms.routes')->add($name, $options);
//        }

        return $module;
    }

}
