<?php

namespace Lirox\System;

use Illuminate\Foundation\Application as FoundationApplication;

class Application extends FoundationApplication
{
    protected $namespace = 'Lirox\\App\\';

    public function __construct($basePath = null)
    {
        parent::__construct($basePath);
    }

    public function path($path = '')
    {
        return $this->basePath.DIRECTORY_SEPARATOR.($path ? $path : $path);
    }

    public function basePath($path = '')
    {
        return $this->basePath.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function bootstrapPath($path = '')
    {
        return $this->basePath.DIRECTORY_SEPARATOR.'lirox'.DIRECTORY_SEPARATOR.'bootstrap'.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function configPath($path = '')
    {
        return $this->basePath.DIRECTORY_SEPARATOR.'lirox'.DIRECTORY_SEPARATOR.'config'.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function databasePath($path = '')
    {
        return ($this->databasePath ?: $this->basePath.DIRECTORY_SEPARATOR.'lirox'.DIRECTORY_SEPARATOR.'database').($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function langPath()
    {
        return $this->resourcePath().DIRECTORY_SEPARATOR.'lirox'.DIRECTORY_SEPARATOR.'language';
    }

    public function publicPath()
    {
        return $this->basePath;
    }

    public function storagePath()
    {
        return $this->storagePath ?: $this->basePath.DIRECTORY_SEPARATOR.'lirox'.DIRECTORY_SEPARATOR.'storage';
    }

    public function resourcePath($path = '')
    {
        return $this->basePath.DIRECTORY_SEPARATOR.'resources'.($path ? DIRECTORY_SEPARATOR.$path : $path);
    }

    public function environmentPath()
    {
        return $this->environmentPath ?: $this->basePath;
    }

    public function getCachedServicesPath()
    {
        return $this->bootstrapPath().'/cache/services.php';
    }

    public function getCachedPackagesPath()
    {
        return $this->bootstrapPath().'/cache/packages.php';
    }

    public function getCachedConfigPath()
    {
        return $this->bootstrapPath().'/cache/config.php';
    }

    public function getCachedRoutesPath()
    {
        return $this->bootstrapPath().'/cache/routes.php';
    }

}
