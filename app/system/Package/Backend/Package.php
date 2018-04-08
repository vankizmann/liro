<?php

namespace App\Package\Backend;

class Package
{
    protected $app;
    protected $index;
    protected $directory;
    protected $config;

    public $state;
    public $hidden;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function make($index, $directory, $config)
    {
        $this->index = $index;
        $this->directory = $directory;
        $this->config = $config;

        return $this->register();
    }

    public function register()
    {
         $registry = $this->app['cms.package.registry']->get($this->index);

        $this->state = $registry['state'];
        $this->hidden = $registry['hidden'];

        return $this;
    }

    public function get($key, $default = null)
    {
        if ( isset($this->config[$key]) ) {
            return $this->config[$key];
        }

        return $default;
    }

    public function loadNamespace()
    {
        $loader = $this->app['cms.loader'];

        $loader->addPrefix(collect(explode('/', $this->index))->reduce(function($result, $item) {
            return $result . ucfirst($item) . '\\';
        }, ''), $this->directory);
        
        $loader->register();

        return $this;
    }

    public function callRegister()
    {
        $registerFunction = $this->get('register');

        if ( ! is_null($registerFunction) && is_callable($registerFunction) ) {
            call_user_func($registerFunction, $this->app);
        }

        return $this;
    }

}