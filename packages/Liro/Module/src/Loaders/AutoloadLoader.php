<?php


namespace Liro\Module\Loaders;

use Liro\Module\Module\Module;

class AutoloadLoader implements LoaderInterface
{


    public function load(Module $module)
    {
        foreach ($module->autoload ?: [] as $namespace => $hint) {
            app('web.autoload')->addPsr4($namespace, $module->path . '/' . $hint);
        }

        app('web.autoload')->register();

        return $module;
    }

}
