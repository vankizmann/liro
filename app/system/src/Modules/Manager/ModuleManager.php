<?php

namespace Liro\System\Modules\Manager;

use Illuminate\Support\Collection;
use Liro\System\Modules\Module\BaseModule;

class ModuleManager
{
    public $booters;
    public $loaders;

    public $booted;
    public $loaded;

    public function __construct()
    {
        $this->booters = new Collection();
        $this->loaders = new Collection();

        $this->booted = new Collection();
        $this->loaded = new Collection();
    }

    public function boot($modules = [])
    {
        $this->bootModules($modules);
    }

    public function load($modules = [])
    {
        $this->loadModules($modules);
    }

    public function bootModules($modules)
    {
        collect($modules)->each([$this, 'bootModule']);
    }

    public function bootModule($config)
    {
        $module = new BaseModule($config);

        if ( $this->booted->has($module['name']) ) {
            return;
        }

        foreach ( $this->booters as $booter ) {
            $module = call_user_func([ app()->make($booter), 'load' ], $module);
        }

        $this->booted->put($module['name'], $module);
    }

    public function loadModules($modules)
    {
        $this->booted->whereIn('name', $modules)
            ->each([$this, 'loadModule']);
    }

    public function loadModule($module)
    {
        if ( $this->loaded->has($module['name']) ) {
            return;
        }

        foreach ( $this->loaders as $loader ) {
            $module = call_user_func([ app()->make($loader), 'load' ], $module);
        }

        $this->loaded->put($module['name'], $module);
    }

}
