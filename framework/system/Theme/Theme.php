<?php

namespace Liro\System\Theme;

use Illuminate\Contracts\Foundation\Application;

class Theme
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
        $this->getThemesFromCache();
        $this->resolveThemesFromCache();
        $this->getActiveTheme();

        $this->app->get('events')->fire('liro.theme.load');
    }

    public function setCachePath()
    {
        $path = env('MODULES_CACHE', 'cache/themes.php');
        $this->cachePath = $this->app->storagePath($path);
    }

    public function setFrontendPaths()
    {
        $folder = env('MODULES_FRONTEND', 'themes/*');
        $this->frontendPaths = $this->app->get('files')->glob($folder, GLOB_ONLYDIR);
    }

    public function setBackendPaths()
    {
        $folder = env('MODULES_BACKEND', 'themes/*');
        $this->backendPaths = $this->app->get('files')->glob($folder, GLOB_ONLYDIR);
    }

    public function setInstallerPaths()
    {
        $folder = env('MODULES_INSTALLER', 'framework/installer/themes/*');
        $this->installerPaths = $this->app->get('files')->glob($folder, GLOB_ONLYDIR);
    }

    public function getThemesFromCache()
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

    public function resolveThemesFromCache()
    {
        foreach ( $this->cache->all() as $path => $state ) {
            $this->collection[] = $this->app->get('liro.theme.prototype')->load($path, $state);
        }
    }

    public function getActiveTheme()
    {
        $active = array_filter($this->collection, function($theme) {
            return $theme->getType() == $this->app->get('liro.factory')->getMode();
        });

        if ( ! count($active) ) {
            return;
        }

        $this->app->get('liro.factory')->setTheme(current($active));
    }

}
