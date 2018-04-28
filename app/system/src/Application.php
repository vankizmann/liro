<?php

namespace Liro\System;

use Illuminate\Foundation\Application as FoundationApplication;

class Application extends FoundationApplication
{
    protected $namespace = 'Liro\\System\\';

    public function __construct($basePath)
    {
        parent::__construct($basePath);
        $this->registerServiceProvider();
        $this->registerServiceContainer();
    }

    protected function registerServiceProvider() {
        $this->register(\Liro\System\Providers\AppServiceProvider::class);
        $this->register(\Liro\System\Providers\EventServiceProvider::class);
        $this->register(\Liro\System\Providers\RouteServiceProvider::class);
        $this->register(\Liro\System\Providers\ViewServiceProvider::class);
    }

    protected function registerServiceContainer()
    {
        $this->singleton('modules', \Liro\System\Modules\ModuleManager::class); 
    }

    public function path($path = '')
    {
        return $this->basePath.($path ? "/$path" : $path);
    }

    public function basePath($path = '')
    {
        return $this->basePath.($path ? "/{$path}" : $path);
    }

    public function appPath($path = '')
    {
        return "{$this->basePath}/app/system".($path ? "/{$path}" : $path);
    }

    public function configPath($path = '')
    {
        return "{$this->basePath}/app/config".($path ? "/{$path}" : $path);
    }

    public function langPath($path = '')
    {
        return "{$this->basePath}/app/system/languages".($path ? "/{$path}" : $path);
    }

    public function storagePath($path = '')
    {
        return "{$this->basePath}/tmp".($path ? "/{$path}" : $path);
    }

    public function getCachedServicesPath()
    {
        return $this->storagePath('cache/services.php');
    }

    public function getCachedPackagesPath()
    {
        return $this->storagePath('cache/packages.php');
    }

    public function getCachedConfigPath()
    {
        return $this->storagePath('cache/config.php');
    }

    public function getCachedRoutesPath()
    {
        return $this->storagePath('cache/routes.php');
    }

}
