<?php

namespace Liro\Module;

use App\Database\Module;

class ModuleManager
{
    protected $app;

    public $modules = [];

    public $configs = [];

    public $loaded = [];

    public function __construct($app)
    {
        $this->app = $app;

        $this->app['events']->dispatch('registered: web.module', $this->app);
    }

    public function boot()
    {
        $this->configs = array_reduce(config('module.paths', []), function ($merge, $path) {
            return array_merge($merge, glob(app()->basePath() . $path));
        }, []);

        foreach ($this->configs as $config) {
            $this->modules[] = app()->make(config('module.use'), ['path' => $config]);
        }

        uasort($this->modules, function ($a, $b) {

            if ( $a['type'] === 'layout' && $b['type'] === 'layout' ) {
                return 0;
            }

            if ( $a['type'] === 'layout' && $b['type'] !== 'layout' ) {
                return -1;
            }

            return 1;
        });

        foreach ($this->modules as $module) {

            if ( Module::enabled()->where('package', $module->name)->count() === 0 ) {
                continue;
            }

            foreach (config('module.loaders') as $loader) {
                $module = app()->make($loader)->load($module);
            }

            $this->loaded[$module->name] = $module;
        }

        $this->app['events']->dispatch('booted: web.module', $this->app);
    }

    public function getLoaded()
    {
        return $this->loaded;
    }

    public function getModule($name, $key = null, $fallback = null)
    {
        if ( ! isset($this->loaded[$name]) ) {
            return $fallback;
        }

        return $key ? data_get($this->loaded[$name], $key) :
            $this->loaded[$name];
    }

}
