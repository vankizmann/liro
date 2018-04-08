<?php

namespace App\Package;

use Exception;

class PackageLoader
{
    protected $app;
    protected $path;
    protected $packages;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function getPath()
    {
        return $this->path;
    }

    public function setPath($path)
    {
        $this->path = trim($path, '/').'/';
        return $this;
    }

    protected function resolvePath()
    {
        return $this->app['files']->glob($this->path.'*/*', GLOB_ONLYDIR);
    }

    protected function removePath($dir)
    {
        $safeDir = preg_quote($this->path, '/');
        return preg_replace('/^'.$safeDir.'/', '', $dir);
    }

    public function boot()
    {
        $this->packages = collect($this->resolvePath())->reduce(function($result, $directory) {

            $index = $this->removePath($directory);

            if ( ! file_exists($directory.'/config.php') ) {
                return $packages;
            }

            $config = require($directory.'/config.php');

            if ( ! isset($config['name']) ) {
                throw new Exception("Missing field name in {$index}");
            }

            if ( ! isset($config['version']) ) {
                throw new Exception("Missing field version in {$index}");
            }

            if ( ! isset($config['type']) ) {
                throw new Exception("Missing field type in {$index}");
            }

            return array_merge($result, [
                $index => $this->app->get($config['type'])->make($index, $directory, $config)
            ]);
            
        }, []);
    }

    public function get($index)
    {
        if ( ! array_key_exists($index, $this->packages) ) {
            throw new Exception("Package {$index} does not exist.");
        }

        return $this->packages[$index];
    }

    public function all()
    {
        return collect($this->packages);
    }

}