<?php

namespace App\Support\Package;

use Illuminate\Support\Collection;

class Package
{
    protected $app;

    public $path;

    public $config = [];

    public $scripts = [];

    public function __construct($app, $path)
    {
        $this->app = $app;
        $this->path = $path;
        $this->loadConfig();
        $this->loadScripts();
    }

    public function loadConfig()
    {
        !$this->app->files->exists("{$this->path}/config.php") ?: 
            $this->config = require("{$this->path}/config.php");
    }

    public function config()
    {
        return Collection::make($this->config);
    }

    public function loadScripts()
    {
        !$this->app->files->exists("{$this->path}/scripts.php") ?: 
            $this->scripts = require("{$this->path}/scripts.php");
    }

    public function scripts()
    {
        return Collection::make($this->scripts);
    }

}