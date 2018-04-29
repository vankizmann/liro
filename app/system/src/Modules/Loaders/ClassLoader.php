<?php

namespace Liro\System\Modules\Loaders;

use Composer\Autoload\ClassLoader as Loader;

class ClassLoader implements LoaderInterface
{
    protected $loader;

    public function __construct(Loader $loader)
    {
        $this->loader = $loader;
    }

    public function load($module)
    {
        foreach ($module->config('autoload', []) as $namespace => $hint) {
            $this->loader->addPsr4($namespace, $module->path.'/'.$hint);
        }

        $this->loader->register();

        return $module;
    }

}
