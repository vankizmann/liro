<?php

namespace Liro\System\Modules\Module\Loaders;

use Liro\System\Modules\Module\BaseModule;

class AutoloadLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        foreach (@$module['autoload'] ?: [] as $namespace => $hint) {
            app('autoloader')->addPsr4($namespace, $module['path'] . '/' . $hint);
        }

        return $module;
    }

}
