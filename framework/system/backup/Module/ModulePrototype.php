<?php

namespace Liro\System\Module;

use Illuminate\Contracts\Foundation\Application;

class ModulePrototype
{
    protected $app;

    protected $path;

    protected $state;

    protected $unique;

    protected $config;

    protected $scripts; 

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($path, $state)
    {
        $this->setPath($path);
        $this->setState($state);

        $this->loadConfig();
        $this->resolveConfig();

        return $this;
    }

    public function setPath($path)
    {
        $this->path = $path;
    }

    public function getPath()
    {
        return $this->path;
    }

    public function setState($state)
    {
        $this->state = $state;
    }

    public function getState()
    {
        return $this->state;
    }

    public function setUnique($unique)
    {
        $this->unique = $unique;
    }

    public function getUnique()
    {
        return $this->unique;
    }

    public function loadConfig()
    {
        if ( ! file_exists("{$this->path}/config.php") ) {
            return;
        }

        $this->config = require("{$this->path}/config.php");
    }

    public function resolveConfig()
    {
        if ( ! $this->state ) {
            return;
        }

        $unique = @$this->config['unique'] ?: null;

        if ( isset($unique) ) {
            $this->setUnique($unique);
        }

        $autoload = @$this->config['autoload'] ?: null;
        
        if ( isset($autoload) ) {
            $this->createAutoload($autoload);
        }

        $events = @$this->config['events'] ?: null;
        
        if ( isset($events) ) {
            $this->createEvents($events);
        }

        $frontend = @$this->config['frontend'] ?: null;
        
        if ( isset($frontend) ) {
            $this->createFrontend($frontend);
        }

        $backend = @$this->config['backend'] ?: null;
        
        if ( isset($backend) ) {
            $this->createBackend($backend);
        }

        $installer = @$this->config['installer'] ?: null;
        
        if ( isset($installer) ) {
            $this->createBackend($installer);
        }

        $this->app->get('liro.translator.handler')->addJsonPath($this->path);
        $this->app->get('liro.view.handler')->register($this->unique, $this->path);
    }

    public function createAutoload($autoload)
    {
        foreach ( $autoload as $class => $hint ) {
            $this->app->get('liro.loader')->addPrefix($class, "{$this->path}/{$hint}")->register();
        }
    }

    public function createEvents($events)
    {
        foreach ( $events as $event => $handler ) {
            $this->app->get('events')->listen($event, $handler);
        }
    }

    public function createFrontend($frontend)
    {
        foreach ( $frontend as $name => $callback ) {
            $this->app->get('liro.menu')->addFrontendRoute("{$this->unique}.{$name}", $callback);
        }
    }

    public function createBackend($backend)
    {
        foreach ( $backend as $name => $callback ) {
            $this->app->get('liro.menu')->addBackendRoute("{$this->unique}.{$name}", $callback);
        }
    }

    public function createInstaller($installer)
    {
        foreach ( $installer as $name => $callback ) {
            $this->app->get('liro.menu')->addInstallerRoute("{$this->unique}.{$name}", $callback);
        }
    }

}
