<?php

namespace Liro\Support;

use Liro\Support\Application\LoadedTrait;
use Liro\Support\Application\LocalesTrait;
use Liro\Support\Application\DomainTrait;
use Liro\Support\Application\ProtocolTrait;

class Application extends \Illuminate\Foundation\Application
{
    use LoadedTrait, ProtocolTrait, DomainTrait, LocalesTrait;

    protected $namespace = 'App\\';

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

    public function routesAreCached()
    {
        return false;
    }

    public function getCachedServicesPath()
    {
        return $this->storagePath('framework/app/services.php');
    }

    public function getCachedPackagesPath()
    {
        return $this->storagePath('framework/app/packages.php');
    }

    public function getCachedConfigPath()
    {
        return $this->storagePath('framework/app/config.php');
    }

    public function getCachedRoutesPath()
    {
        return $this->storagePath('framework/app/routes.php');
    }

    public function getCachedEventsPath()
    {
        return $this->storagePath('framework/app/events.php');
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
