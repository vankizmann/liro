<?php

namespace Liro\System\Cms\Managers;

use Liro\System\Support\Collection;
use Liro\System\Cms\Module\BaseModule;

class ModuleManager
{
    public $use = BaseModule::class;

    public $booted;
    public $loaded;

    public $filters;
    public $history;

    public function __construct()
    {
        $this->booted = new Collection();
        $this->loaded = new Collection();

        $this->filters = new Collection();
        $this->history = new Collection();
    }

    public function getBooted()
    {
        return $this->booted;
    }

    public function getLoaded()
    {
        return $this->loaded;
    }

    public function bootModule($config)
    {
        $this->booted->push(
            app()->make($this->use, ['path' => $config])
        );
    }

    public function loadModule($name)
    {
        foreach ( $this->booted->where('name', $name) as $module ) {
            call_user_func([$this, 'runFilter'], $module);
        }
    }

    public function loadModules($names)
    {
        foreach ( $this->booted->whereIn('name', $names) as $module ) {
            call_user_func([$this, 'runFilter'], $module);
        }
    }

    public function refreshModules()
    {
        $this->loaded->map([$this, 'runFilter']);
    }

    public function runFilter($module)
    {
        $filters = $this->history->mergeDiff(
            $module->name, $this->filters
        );

        foreach ($filters as $filter) {
            $module = app()->make($filter)->load($module);
        }

        return $this->loaded[$module->name] = $module;
    }

    public function addFilter($filter)
    {
        $this->filters->push($filter);
    }

}
