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
        $this->packages = array_map([$this, 'make'], $paths);
    }

    public function make($path)
    {
        return new Package($this->app, $path);
    }

}