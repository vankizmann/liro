<?php

namespace Framework\System\Module;

use Illuminate\Contracts\Foundation\Application;

class ModuleInstance
{
    /**
     * Application instance.
     *
     * @var Illuminate\Contracts\Foundation\Application
     */
    protected $app;

    /**
     * Initialize class.
     *
     * @param Illuminate\Contracts\Foundation\Application $app
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Import configs.
     *
     * @param array $folder
     */
    public function make($folder)
    {
        array_map(function($config) {
            $this->app['configloader']->import($config);
        }, $this->app['fileloader']->import($folder));
    }

}
