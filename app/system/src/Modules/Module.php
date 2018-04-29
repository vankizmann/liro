<?php

namespace Liro\System\Modules;

use Illuminate\Contracts\Foundation\Application;

class Module
{
    protected $app;

    public $name;

    public $path;

    public $config = [];

    public $options = [];

    public $scripts = [];

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function init($module)
    {
        $this->name = $module['name'];
        $this->path = $module['path'];

        $this->config = $module;
        
        if ( file_exists($module['path'] . '/options.php') ) {
            $this->options = include $module['path'] . '/options.php';
        }

        if ( file_exists($module['path'] . '/scripts.php') ) {
            $this->scripts = include $module['path'] . '/scripts.php';
        }

        return $this;
    }

    public function options($key, $default = null)
    {
        return isset($this->options[$key]) ? $this->options[$key] : $default;
    }

    public function config($key, $default = null)
    {
        return isset($this->config[$key]) ? $this->config[$key] : $default;
    }

    public function scripts($key, $default = null)
    {
        return isset($this->scripts[$key]) ? $this->scripts[$key] : $default;
    }

    public function install()
    {
        $install = $this->scripts('install');
        
        return is_callable($install) ? $install($this->app) : null;
    }

}
