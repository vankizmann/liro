<?php

namespace Liro\Support;

class Application extends \Illuminate\Foundation\Application
{
    protected $namespace = 'App\\';

    public function routesAreCached()
    {
        return false;
    }

    public function getCachedServicesPath()
    {
        return $this->bootstrapPath('cache/services.php');
    }

    public function getCachedPackagesPath()
    {
        return $this->bootstrapPath('cache/packages.php');
    }

    public function getCachedConfigPath()
    {
        return $this->bootstrapPath('cache/config.php');
    }

    public function getCachedRoutesPath()
    {
        return $this->bootstrapPath('cache/routes.php');
    }

    public function getCachedEventsPath()
    {
        return $this->bootstrapPath('cache/events.php');
    }

    public function path($path = '')
    {
        return str_join('/', $this->basePath, $path);
    }

    public function basePath($path = '')
    {
        return str_join('/', $this->basePath, $path);
    }

    public function appPath($path = '')
    {
        return str_join('/', $this->basePath, 'app', $path);
    }

    public function configPath($path = '')
    {
        return str_join('/', $this->basePath, 'config', $path);
    }

    public function langPath($path = '')
    {
        return str_join('/', $this->basePath, 'language', $path);
    }

    public function storagePath($path = '')
    {
        return str_join('/', $this->basePath, 'storage', $path);
    }

    public function bootstrapPath($path = '')
    {
        return str_join('/', $this->basePath, 'bootstrap', $path);
    }

}
