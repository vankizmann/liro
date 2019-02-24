<?php

namespace Liro\System\Cms\Loaders;

use Composer\Autoload\ClassLoader as Loader;

class ClassLoader implements LoaderInterface
{

    public function load($module)
    {
        $loader = new Loader;

        foreach ($module->config('autoload', []) as $namespace => $hint) {
            $loader->addPsr4($namespace, $module->config('path') . '/' . $hint);
        }

        $loader->register();

        return $module;
    }

}
