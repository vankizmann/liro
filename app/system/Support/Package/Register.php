<?php

namespace App\Support\Package;

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
        $alias = $config->get('alias');

        $this->app->get('view')->addNamespace($alias, $package->path.'/view');
        $this->app->get('translator')->addJsonPath($package->path.'/language');

        $autoload = isset($package->config['autoload']) ? 
            $package->config['autoload'] : [];

        foreach ($autoload as $key => $value) {
            $this->app->get('autoload')->addPrefix($key, $package->path.'/'.$value);
        }

        $events = isset($package->config['events']) ? 
            $package->config['events'] : [];

        if ( $value = isset($events['factory.boot']) ? $events['factory.boot'] : null ) {
            $this->app->get('events')->listen('factory.boot', $value);
        }

        if ( $value = isset($events['factory.route']) ? $events['factory.route'] : null ) {
            $this->app->get('events')->listen('factory.route', $value);
        }

        if ( $value = isset($events['frontend.route']) ? $events['frontend.route'] : null ) {
            $this->app->get('events')->listen($alias.'.frontend.route', $value);
        }

        if ( $value = isset($events['backend.route']) ? $events['backend.route'] : null ) {
            $this->app->get('events')->listen($alias.'.backend.route', $value);
        }

        // array_walk(, Arr::get($config, 'autoload', []));
    }

    public function makeInstall($package)
    {
        // 
    }

}