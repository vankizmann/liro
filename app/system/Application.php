<?php

namespace App;

use Illuminate\Foundation\Application as FoundationApplication;

class Application extends FoundationApplication
{
    protected $namespace = 'App\\';

    protected function bindPathsInContainer()
    {
        $this->instance(
            'path', $this->path()
        );

        $this->instance(
            'path.base', $this->basePath()
        );

        $this->instance(
            'path.lang', $this->langPath()
        );

        $this->instance(
            'path.config', $this->configPath()
        );

        $this->instance(
            'path.storage', $this->storagePath()
        );

    }

    public function path($path = '')
    {
        return $this->basePath.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function basePath($path = '')
    {
        return $this->basePath.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function appPath($path = '')
    {
        return $this->basePath.DIRECTORY_SEPARATOR.'app'.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function configPath($path = '')
    {
        return $this->appPath().DIRECTORY_SEPARATOR.'config'.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function langPath($path = '')
    {
        return $this->appPath().DIRECTORY_SEPARATOR.'language'.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function storagePath($path = '')
    {
        return $this->appPath().DIRECTORY_SEPARATOR.'storage'.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function environmentPath()
    {
        return $this->basePath();
    }

    public function getCachedServicesPath()
    {
        return $this->appPath('cache/services.php');
    }

    public function getCachedPackagesPath()
    {
        return $this->appPath('cache/packages.php');
    }

    public function getCachedConfigPath()
    {
        return $this->appPath('cache/config.php');
    }

    public function getCachedRoutesPath()
    {
        return $this->appPath('cache/routes.php');
    }

}
