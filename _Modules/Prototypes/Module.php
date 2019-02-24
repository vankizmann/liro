<?php

namespace Liro\System\Cms\Prototypes;

use Illuminate\Contracts\Foundation\Application;

class Module
{
    protected $app;

    public $config = [];

    public $scripts = [];

    public $routes = [];

    public function __construct(Application $app, $config)
    {
        $this->app = $app;
        $this->config = $config;

        $this->loadFiles();
    }

    protected function loadFiles()
    {
        $scripts_path = $this->config('path') . '/scripts.php';

        if ( file_exists($scripts_path) ) {
            $this->scripts = @include $scripts_path;
        }

        $routes_path = $this->config('path') . '/routes.php';

        if ( file_exists($routes_path) ) {
            $this->routes = @include $routes_path;
        }

        return true;
    }

    public function config($key, $default = null)
    {
        return @$this->config[$key] ?: $default;
    }

    public function scripts($key, $default = null)
    {
        return @$this->scripts[$key] ?: $default;
    }

    public function routes($key, $default = null)
    {
        return @$this->scripts[$key] ?: $default;
    }

}
