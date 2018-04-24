<?php

namespace Liro\System\Module;

use Illuminate\Contracts\Foundation\Application;

class Module
{
    protected $app;

    protected $cachePath;

    protected $cache;

    protected $frontendPaths;

    protected $backendPaths;

    protected $installerPaths;

    protected $collection;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load()
    {
        $this->setCachePath();
        $this->setFrontendPaths();
        $this->setBackendPaths();
        $this->setInstallerPaths();
        $this->getModulesFromCache();
        $this->resolveModulesFromCache();

        $this->app->get('events')->fire('liro.module.load');
    }

    public function setCachePath()
    {
        $path = env('MODULES_CACHE', 'cache/modules.php');
        $this->cachePath = $this->app->storagePath($path);
    }

    public function setFrontendPaths()
    {
        $folder = env('MODULES_FRONTEND', 'modules/*/*');
        $this->frontendPaths = $this->app->get('files')->glob($folder, GLOB_ONLYDIR);
    }

    public function setBackendPaths()
    {
        $folder = env('MODULES_BACKEND', 'modules/*/*');
        $this->backendPaths = $this->app->get('files')->glob($folder, GLOB_ONLYDIR);
    }

    public function setInstallerPaths()
    {
        $folder = env('MODULES_INSTALLER', 'framework/installer/modules/*');
        $this->installerPaths = $this->app->get('files')->glob($folder, GLOB_ONLYDIR);
    }

    public function getModulesFromCache()
    {
        $store = $this->app->get('liro.store')
            ->path($this->cachePath);

        if ( $this->app->get('liro.factory')->getMode() == 'frontend' ) {
            $store->make($this->frontendPaths);
        }

        if ( $this->app->get('liro.factory')->getMode() == 'backend' ) {
            $store->make($this->backendPaths);
        }

        if ( $this->app->get('liro.factory')->getMode() == 'installer' ) {
            $store->make($this->installerPaths);
        }

        $this->cache = $store->write();
    }

    public function resolveModulesFromCache()
    {
        foreach ( $this->cache->all() as $path => $state ) {
            $this->collection[] = $this->app->get('liro.module.prototype')->load($path, $state);
        }
    }

}
