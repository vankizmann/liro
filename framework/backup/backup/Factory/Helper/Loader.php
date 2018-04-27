<?php

namespace Liro\System\Factory\Helper;

use Symfony\Component\ClassLoader\Psr4ClassLoader;

class Loader extends Psr4ClassLoader
{
    public function addPrefix($prefix, $hint)
    {
        parent::addPrefix($prefix, $hint);
        return $this;
    }
}
