<?php

namespace Framework\System\Module;

use Symfony\Component\ClassLoader\Psr4ClassLoader;

class ClassLoader extends Psr4ClassLoader
{
    /**
     * Add prefix.
     *
     * @param string $prefix
     * @param string $hint
     * @param string $folder
     */
    public function addPrefix($prefix, $hint, $folder = '')
    {
        parent::addPrefix($prefix, $folder ? "{$folder}/{$hint}" : $hint);
    }

    /**
     * Add prefix and register.
     *
     * @param string $prefix
     * @param string $hint
     * @param string $folder
     */
    public function addPrefixAndRegister($prefix, $hint, $folder = '')
    {
        parent::addPrefix($prefix, $folder ? "{$folder}/{$hint}" : $hint);
        parent::register();
    }

}
