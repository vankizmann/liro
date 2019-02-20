<?php

namespace Liro\System;

use Illuminate\Foundation\Application as FoundationApplication;
use Liro\System\Modules\Managers\ModuleManager;

class Application extends FoundationApplication
{
    protected $namespace = 'Liro\\System\\';

    protected $domain;

    public function __construct($basePath)
    {
        parent::__construct($basePath);

        if ( ! $this->runningInConsole() && ! $this->runningUnitTests() ) {
            $this->setDomain($_SERVER['SERVER_NAME']);
        }

        $this->singleton('modules', ModuleManager::class);
    }

    public function setDomain($domain)
    {
        return $this->domain = preg_replace('#^https?://#', '', $domain);
    }

    public function getDomain()
    {
        return $this->domain;
    }

    public function hasDomain()
    {
        return ! empty($this->domain);
    }

    public function path($path = '')
    {
        return $this->basePath . ($path ? "/$path" : $path);
    }

    public function basePath($path = '')
    {
        return $this->basePath . ($path ? "/{$path}" : $path);
    }

    public function appPath($path = '')
    {
        return "{$this->basePath}/app/system" . ($path ? "/{$path}" : $path);
    }

    public function configPath($path = '')
    {
        return "{$this->basePath}/app/config" . ($path ? "/{$path}" : $path);
    }

    public function langPath($path = '')
    {
        return "{$this->basePath}/app/system/languages" . ($path ? "/{$path}" : $path);
    }

    public function storagePath($path = '')
    {
        return "{$this->basePath}/tmp" . ($path ? "/{$path}" : $path);
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
