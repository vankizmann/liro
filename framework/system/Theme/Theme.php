<?php

namespace Liro\System\Theme;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Factory\Helpers\Store;

class Theme
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
        $config = $this->app->storagePath('cache/themes.php');

        $folder = $this->app['liro']->getThemePath();
        $paths = $this->app['files']->glob($folder, GLOB_ONLYDIR);

        $this->store = new Store($config, $paths);
    }

    public function boot()
    {
        
    }

}
