<?php

namespace Liro\System;

use Liro\System\Application\LoadedTrait;
use Liro\System\Application\LocalesTrait;
use Liro\System\Application\DomainTrait;
use Liro\System\Application\ProtocolTrait;

class Application extends \Illuminate\Foundation\Application
{
    use LoadedTrait, ProtocolTrait, DomainTrait, LocalesTrait;

    protected $namespace = 'Liro\\System\\';

    public function __construct(?string $basePath = null)
    {
        if ( ! $this->runningInConsole() ) {

            // TODO: Comment
            $this->setProtocol($_SERVER['SERVER_PROTOCOL']);

            // TODO: Comment
            $this->setDomain($_SERVER['HTTP_HOST']);
        }

        parent::__construct($basePath);
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
        return str_join('/', $this->basePath, 'app/system', $path);
    }

    public function configPath($path = '')
    {
        return str_join('/', $this->basePath, 'app/config', $path);
    }

    public function langPath($path = '')
    {
        return str_join('/', $this->basePath, 'app/languages', $path);
    }

    public function storagePath($path = '')
    {
        return str_join('/', $this->basePath, 'tmp', $path);
    }

}
