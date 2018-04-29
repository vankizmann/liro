<?php

namespace Liro\System\Assets\Loaders;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Modules\Loaders\LoaderInterface;

class AssetLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        $this->app['scripts']->addNamespace($module->name, $module->path);
        $this->app['styles']->addNamespace($module->name, $module->path);
        
        return $module;
    }
}
