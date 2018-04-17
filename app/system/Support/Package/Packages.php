<?php

namespace App\Support\Package;

class Packages
{
    protected $app;

    public $packages = [];

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function load($paths)
    {
        $this->packages = array_reduce($paths, [$this, 'make'], []);
        return $this;
    }

    public function make($packages, $path)
    {
        return array_merge($packages, [
            $path => new Package($this->app, $path)
        ]);
    }

    public function all()
    {
        return $this->packages;
    }

    public function get($path)
    {
        return isset($this->packages[$path]) ? 
            $this->packages[$path] : null;
    }

}