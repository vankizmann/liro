<?php

namespace Liro\System\Modules\Managers;

use Liro\System\Modules\Prototypes\Module;
use Illuminate\Contracts\Foundation\Application;

class ModuleManager
{
    /**
     * Application instance
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Module loaders
     *
     * @var array
     */
    protected $loaders = [];

    /**
     * Loaded configs
     *
     * @var array
     */
    public $configs = [];

    /**
     * Loaded modules
     *
     * @var array
     */
    public $modules = [];

    /**
     * Initialize application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function getConfig($name)
    {
        return @$this->configs[$name] ?: null;
    }

    public function setConfig($name, $config)
    {
        $this->configs[$name] = $config;
    }

    public function getModule($name)
    {
        return @$this->modules[$name] ?: null;
    }

    public function setModule($name, $module)
    {
        $this->modules[$name] = $module;
    }

    public function addLoader($loader)
    {
        $this->loaders[] = $this->app->make($loader);
    }

    public function addLoaders($loaders)
    {
        foreach ($loaders as $loader) {
            $this->addLoader($loader);
        }

        return $this;
    }

    protected function registerConfig($config_path)
    {
        $config = @include $config_path ?: null;

        if ( $config == null ) {
            return false;
        }

        $config_dir = dirname($config_path);

        if ( ! array_key_exists('name', $config) ) {
            throw new \Exception("Module is missing name: {$config_dir}");
        }

        if ( ! array_key_exists('type', $config) ) {
            throw new \Exception("Module is missing type: {$config_dir}");
        }

        $this->setConfig($config['name'], array_merge(['path' => $config_dir], $config));

        return true;
    }

    protected function resolvePath($path, $base_path = null)
    {
        return $base_path ? $base_path . '/' . $path : $path;
    }

    public function loadPath($path, $base_path = null)
    {
        $config_paths = glob(
            $this->resolvePath($path, $base_path)
        );

        foreach ($config_paths as $config_path) {
            $this->registerConfig($config_path);
        }

        return $this;
    }

    public function loadPaths($paths, $base_path = null)
    {
        foreach ($paths as $path) {
            $this->loadPath($path, $base_path);
        }
    }

    protected function registerModule($name, $config)
    {
        $module = $this->app->make(Module::class, ['config' => $config]);

        foreach ($this->loaders as $loader) {
            $module = $this->app->call([$loader, 'load'], ['module' => $module]);
        }

        $this->modules[$name] = $module;
    }

    public function loadModule($name)
    {
        $config = $this->getConfig($name);

        if ( $config == null ) {
            throw new \Exception("Module is not registered: {$name}");
        }

        $module = $this->getModule($name);

        if ( $module != null ) {
            throw new \Exception("Module is already loaded: {$name}");
        }

        $this->registerModule($name, $config);
    }

    public function loadModules($names)
    {
        foreach ($names as $name) {
            $this->loadModule($name);
        }

        return $this;
    }

    public function bootModule($name)
    {
        $module = $this->getModule($name);

        if ( $module == null ) {
            throw new \Exception("Module is already loaded: {$name}");
        }

        $callback = $module->config('boot', null);

        if ( $callback == null ) {
            return false;
        }

        $this->app->call($callback, ['module' => $module]);

        return true;
    }

    public function bootModules($names)
    {
        foreach ($names as $name) {
            $this->bootModule($name);
        }

        return $this;
    }

    public function installModule($name)
    {
        $module = $this->getModule($name);

        if ( $module == null ) {
            throw new \Exception("Module is not loaded: {$name}");
        }

        $callbacks = $module->scripts('install', []);

        foreach ($callbacks as $callback) {
            $this->app->call($callback, ['module' => $module]);
        }

        return true;
    }

    public function installModules($names)
    {
        foreach ($names as $name) {
            $this->installModule($name);
        }

        return $this;
    }

    public function uninstallModule($name)
    {
        $module = $this->getModule($name);

        if ( $module == null ) {
            throw new \Exception("Module is not loaded: {$name}");
        }

        $callbacks = $module->scripts('uninstall', []);

        foreach ($callbacks as $callback) {
            $this->app->call($callback, ['module' => $module]);
        }

        return true;
    }

    public function uninstallModules($names)
    {
        foreach ($names as $name) {
            $this->uninstallModule($name);
        }

        return $this;
    }

    public function registerRoutes($key, $routes)
    {
        foreach ($routes as $route => $options) {
            $this->app['menus']->setRoute($key, $route, $options);
        }
        
        return true;
    }

    public function registerModuleRoutes()
    {
        foreach ($this->modules as $key => $module) {
            $this->registerRoutes($key, $module->routes);
        }

        return $this;
    }

    public function bootModuleRoutes()
    {
        $this->app['menus']->bootModules();
        $this->app['menus']->bootMenus();
    }

    public function registerModuleHints()
    {
        foreach ($this->modules as $module) {

            $this->app['view']->addNamespace(
                $module->config('name'), $module->config('path') . '/views'
            );

            $this->app['translator']->addNamespace(
                $module->config('name'), $module->config('path') . '/languages'
            );

            $this->app['scripts']->setNamespace(
                $module->config('name'), $module->config('path') . '/resources'
            );

            $this->app['styles']->setNamespace(
                $module->config('name'), $module->config('path') . '/resources'
            );

            $this->app['assets']->setNamespace(
                $module->config('name'), $module->config('path') . '/resources'
            );

        }

        return $this;
    }

    public function registerThemeHints($theme = null)
    {
        if ( $theme == null ) {
            $theme = $this->app->getTheme();
        }

        $module = $this->getModule($theme);

        if ( $module == null ) {
            throw new \Exception("Theme is not loaded: {$theme}");
        }

        $this->app['view']->addNamespace(
            'theme', $module->config('path') . '/views'
        );

        $this->app['translator']->addNamespace(
            'theme', $module->config('path') . '/languages'
        );

        $this->app['scripts']->setNamespace(
            'theme', $module->config('path') . '/resources'
        );

        $this->app['styles']->setNamespace(
            'theme', $module->config('path') . '/resources'
        );

        $this->app['assets']->setNamespace(
            'theme', $module->config('path') . '/resources'
        );

        return $this;
    }

}
