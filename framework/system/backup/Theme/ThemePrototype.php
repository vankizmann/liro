<?php

namespace Liro\System\Theme;

use Illuminate\Contracts\Foundation\Application;

class ThemePrototype
{
    protected $app;

    protected $path;

    protected $state;

    protected $type;

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

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getType()
    {
        return $this->type;
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
        
        $type = @$this->config['type'] ?: null;

        if ( isset($type) ) {
            $this->setType($type);
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

}
