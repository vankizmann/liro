<?php

namespace Framework\Module;

use Illuminate\Contracts\Foundation\Application;
use Framework\Module\Loader\ModuleLoader;
use Framework\Module\Loader\ClassLoader;
use Framework\Module\Loader\EventLoader;

class ModuleManager implements \IteratorAggregate
{
    protected $app;

    protected $registered = [];

    protected $modules = [];

    protected $loaders = [];

    public function getIterator()
    {
        return new \ArrayIterator($this->modules);
    }

    public function __construct(Application $app)
    {
        $this->loaders = [
            $app->make(ClassLoader::class),
            $app->make(EventLoader::class)
        ];

        $this->app = $app;
    }

    public function __invoke($name)
    {
        return $this->get($name);
    }

    public function get($name)
    {
        return isset($this->modules[$name]) ? $this->modules[$name] : null;
    }

    public function all()
    {
        return $this->modules;
    }

    public function load($names)
    {
        $resolved = [];

        foreach ($names as $name) {

            if ( isset($this->modules[$name]) ) {
                continue;
            }

            if ( ! isset($this->registered[$name]) ) {
                throw new \RuntimeException("Module not defined: {$name}");
            }

            $module = $this->registered[$name];

            foreach ($this->loaders as $loader) {
                $module = $loader->load($module);
            }

            $this->modules[$name] = $module;
        }

        return $this;
    }

    public function register($path, $basePath = null)
    {
        $files = $this->app['files']->glob($path);

        foreach ($files as $file) {

            if ( ! is_array($module = include $file) ) {
                continue;
            }

            if ( ! isset($module['name']) ) {
                throw new \Exception("Module name missing in: {$file}");
            }

            $this->registered[$module['name']] = array_merge([
                'path' => dirname($file)
            ], $module);

        }

        return $this;
    }

    public function resolvePath($path, $basePath = null)
    {
        return $basePath ? $basePath.'/'.$path : $path;
    }

}