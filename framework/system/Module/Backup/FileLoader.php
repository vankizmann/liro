<?php

namespace Framework\System\Module;
use Illuminate\Contracts\Foundation\Application;

class FileLoader
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
     * Import config files.
     *
     * @param string $folder
     */
    public function import($folder)
    {
        $paths = $this->app['files']->glob("{$folder}/config.php");
        return $this->include($paths);
    }

    /**
     * Include files and return.
     *
     * @param array $configs
     */
    protected function include($configs)
    {
        return array_map(function($config) {
            return array_merge(require($config), ['_folder' => dirname($config)]);
        }, $configs);
    }

}
