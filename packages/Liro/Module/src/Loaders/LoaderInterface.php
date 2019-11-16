<?php

namespace Liro\Module\Loaders;

use Illuminate\Support\ServiceProvider;
use Liro\Module\Module\ModulePrototype;

interface LoaderInterface
{
    function load(ModulePrototype $module);
}
