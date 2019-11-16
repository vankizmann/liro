<?php


namespace Liro\Module\Loaders;

use Liro\Module\Module\ModulePrototype;

class AutoloadLoader implements LoaderInterface
{


    public function load(ModulePrototype $module)
    {
        foreach ($module->autoload ?: [] as $namespace => $hint) {
            app('web.autoload')->addPsr4($namespace, $module->path . '/' . $hint);
        }

        app('web.autoload')->register();

        return $module;
    }

}
