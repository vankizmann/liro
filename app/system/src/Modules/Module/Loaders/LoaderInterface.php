<?php

namespace Liro\System\Modules\Module\Loaders;

use Liro\System\Modules\Module\BaseModule;

interface LoaderInterface
{
    function load(BaseModule $module);
}
