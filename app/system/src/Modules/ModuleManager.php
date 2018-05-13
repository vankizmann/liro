<?php

namespace Liro\System\Modules;

use Illuminate\Contracts\Foundation\Application;

class ModuleManager implements \IteratorAggregate
{
    /**
     * Application instance
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Registered modules
     *
     * @var array
     */
    protected $registered = [];

    /**
     * Loaded modules
     *
     * @var array
     */
    protected $modules = [];

    /**
     * Module loaders
     *
     * @var array
     */
    protected $loaders = [];

    /**
     * Initialize application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Array iterator
     *
     * @return ArrayIterator
     */
    public function getIterator()
    {
        return new \ArrayIterator($this->modules);
    }

    /**
     * Get module by name
     *
     * @param string $name
     * @return array
     */
    public function get($name)
    {
        return isset($this->modules[$name]) ? $this->modules[$name] : null;
    }

    /**
     * Return themes from list
     *
     * @return array
     */
    public function getThemes()
    {
        return collect(
            array_values(
                array_filter($this->modules, function($module) {
                    return $module->config('type') == 'theme';
                })
            )
        );
    }

    /**
     * Return all modules
     *
     * @return array
     */
    public function all()
    {
        return collect($this->modules);
    }

    /**
     * Load modules by name
     *
     * @param array $names
     * @return void
     */
    protected function loadModule($name)
    {
        if ( isset($this->modules[$name]) || ! isset($this->registered[$name]) ) {
            // Jump to next if module is already loaded or does not exists
            return; 
        }

        // Get module from register
        $module = $this->registered[$name];

        foreach ($this->loaders as $loader) {
            // Loop each loader and pass module
            $module = $loader->load($module);
        }

        // Define module
        $this->modules[$name] = $module;

        return $this;
    }

    public function load($names)
    {
        foreach ($names as $name) {
            $this->loadModule($name);
        }

        return $this;
    }

    /**
     * Register modules via path
     *
     * @param string $path
     * @param string $basePath
     * @return void
     */
    protected function registerModule($path, $basePath = null)
    {
        // Get all files with glob
        $files = glob($this->resolvePath($path, $basePath));

        foreach ($files as $file) {

            if ( ! is_array($module = include $file) ) {
                // Continue if module is not an array
                continue;
            }

            if ( ! isset($module['name']) ) {
                // Throw exception if no name is given
                throw new \Exception("Module name missing in: {$file}");
            }

            $module = array_merge([
                'path' => dirname($file)
            ], $module);

            // Add module into register
            $this->registered[$module['name']] = $module;

        }

        return $this;
    }

    public function register($paths, $basePath = null)
    {
        foreach ($paths as $path) {
            $this->registerModule($path, $basePath);
        }

        return $this;
    }

    public function append($loaders)
    {
        foreach ($loaders as $loader) {
            $this->loaders[] = $this->app->make($loader);
        }

        return $this;
    }

    /**
     * Resolve path
     *
     * @param string $path
     * @param string $basePath
     * @return string
     */
    public function resolvePath($path, $basePath = null)
    {
        return $basePath ? $basePath.'/'.$path : $path;
    }

}
