<?php

namespace Liro\Module\Loaders;

use Illuminate\Support\ServiceProvider;
use Liro\Module\Module\Module;

interface LoaderInterface
{
    function load(Module $module);
}
