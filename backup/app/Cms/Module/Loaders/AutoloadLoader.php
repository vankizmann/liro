<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

class AutoloadLoader implements LoaderInterface
{

    public function load(BaseModule $module)
    {
        foreach ($module->autoload ?: [] as $namespace => $hint) {
            app('autoloader')->addPsr4($namespace, $module->path . '/' . $hint);
        }

        app('autoloader')->register();

        return $module;
    }

}
