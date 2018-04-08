<?php

namespace Lirox\System\Services;

use Symfony\Component\ClassLoader\Psr4ClassLoader as Loader;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Schema;

class Package
{
    protected $configs;

    public function __construct()
    {
        $this->configs = File::glob('packages/*/*/config.php');
    }

    public function packages()
    {
        $packages = [];

        foreach ($this->configs as $config) {
            $packages[] = array_merge(include $config, [
                '_dir' => dirname($config)
            ]);
        }

        return collect($packages);
    }

    public function backend()
    {
        $packages = $this->packages()->whereIn('type', [
            'system/component', 'system/theme'
        ]);

        // $filters = DB::table('packages')->get();
        
        // $packages = $packages->filter(function($package) use ($filters) {
        //     $this->
        // })
        
        
        $loader = new Loader;
        
        $packages->each(function($package) use ($loader) {

            if ( file_exists($package['_dir'].DIRECTORY_SEPARATOR.'route.php') ) {
                require $package['_dir'].DIRECTORY_SEPARATOR.'route.php';
            }

            if ( is_dir($package['_dir'].DIRECTORY_SEPARATOR.'language') ) {
                Lang::addJsonPath($package['_dir'].DIRECTORY_SEPARATOR.'language');
            }

            if ( isset($package['init']) && is_callable($package['init']) ) {
                call_user_func($package['init']);
            }

            if ( isset($package['namespace']) ) {
                $loader->addPrefix($package['namespace'], $package['_dir']);
            }

        });

        $loader->register();
    }

}
