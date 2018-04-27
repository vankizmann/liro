<?php

namespace Liro\System\Module\Loader;

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
        foreach (@$module['autoload'] ?: [] as $namespace => $hint) {
            $this->loader->addPsr4($namespace, $module['path'].'/'.$hint);
        }

        $this->loader->register();

        return $module;
    }

}