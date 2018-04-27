<?php

namespace Framework\Module;

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
     * Return all modules
     *
     * @return array
     */
    public function all()
    {
        return $this->modules;
    }

    /**
     * Load modules by name
     *
     * @param array $names
     * @return void
     */
    public function load($names)
    {
        foreach ($names as $name) {

            if ( isset($this->modules[$name]) || ! isset($this->registered[$name]) ) {
                // Jump to next if module is already loaded or does not exists
                continue; 
            }

            // Get module from register
            $module = $this->registered[$name];

            foreach ($this->loaders as $loader) {
                // Loop each loader and pass module
                $module = $loader->load($module);
            }

            // Define module
            $this->modules[$name] = $module;

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
    public function register($path, $basePath = null)
    {
        // Get all files with glob
        $files = $this->app['files']->glob($path);

        foreach ($files as $file) {

            if ( ! is_array($module = include $file) ) {
                // Continue if module is not an array
                continue;
            }

            if ( ! isset($module['name']) ) {
                // Throw exception if no name is given
                throw new \Exception("Module name missing in: {$file}");
            }

            // Add module into register
            $this->registered[$module['name']] = array_merge([
                'path' => dirname($file)
            ], $module);

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
