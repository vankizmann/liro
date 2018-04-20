<?php

namespace Liro\System\Module;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Factory\Helpers\Store;

class Module
{
    /**
     * Application instance.
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    public $store;

    /**
     * Store application
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function init()
    {
        $moduleFolder = $this->app['liro']
            ->getModulePath();

        $modulePaths = $this->app['files']
            ->glob($moduleFolder, GLOB_ONLYDIR);
        
        $configPath = $this->app
            ->storagePath('cache/modules.php');

        $this->store = new Store($configPath, $modulePaths);
    }

    public function boot()
    {
        dd($this->store->store);
    }

}
