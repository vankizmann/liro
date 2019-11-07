<?php

namespace Liro\System\Cms\Module\Loaders;

use Liro\System\Cms\Module\BaseModule;

interface LoaderInterface
{
    function load(BaseModule $module);
}
