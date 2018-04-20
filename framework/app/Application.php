<?php

namespace Liro\App;

use Illuminate\Foundation\Application as FoundationApplication;

class Application extends FoundationApplication
{
    protected $namespace = 'Liro\\App\\';

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
        return "{$this->basePath}/framework/app".($path ? "/{$path}" : $path);
    }

    public function configPath($path = '')
    {
        return "{$this->basePath}/framework/config".($path ? "/{$path}" : $path);
    }

    public function langPath($path = '')
    {
        return "{$this->basePath}/framework/language".($path ? "/{$path}" : $path);
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
