<?php

namespace Liro\Module;

class ModuleManager
{
    protected $app;

    public $modules = [];
    public $configs = [];

    public $loaded = [];

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {

        $this->configs = array_reduce(config('module.paths', []), function($merge, $path) {
            return array_merge($merge, glob(app()->basePath() . $path));
        }, []);

        foreach ( $this->configs as $config ) {
            $this->modules[] = app()->make(Module\ModulePrototype::class, ['path' => $config]);
        }

        foreach ( $this->modules as $module ) {

            foreach ( config('module.loaders') as $loader ) {
                $module = app()->make($loader)->load($module);
            }

            $this->loaded[$module->name] = $module;
        }

        dd($this->loaded);
    }

}
