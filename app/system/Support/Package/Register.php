<?php

namespace App\Support\Package;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class Register
{
    protected $app;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $packages = $this->app->get('packages')->load(
            $this->app->get('config.package')->enabled()
        );

        $install = $this->app->get('packages')->load(
            $this->app->get('config.package')->install()
        );

        array_map(function($package) {
            $this->makePackage($package);
        }, $packages->all());

        array_map(function($package) {
            $this->makeInstall($package);
        }, $install->all());
    }

    public function makePackage($package)
    {
        $config = $package->config();

        if ( $view = $config->get('view') ) {
            $this->app->get('view')->addNamespace($view, $package->path.'/view');
        }
        

        foreach ($config->get('autoload', []) as $key => $value) {
            $this->app->get('autoload')->addPrefix($key, $package->path.'/'.$value);
        }

        foreach ($config->get('events', []) as $key => $value) {
            $this->app->get('events')->listen($package->path.'/'.$key, $value);
        }

        

        // array_walk(, Arr::get($config, 'autoload', []));
    }

    public function makeInstall($package)
    {
        // 
    }

}