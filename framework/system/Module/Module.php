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
        $this->store = new Store(
            $this->app->storagePath('cache/modules.php'),
            $this->app->get('files')->glob($this->app->get('liro')->getModulePath(), GLOB_ONLYDIR)
        );
    }

    public function boot()
    {
        
    }

}
