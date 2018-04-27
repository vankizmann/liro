<?php

namespace Liro\System\Module\Loader;

use Illuminate\Contracts\Foundation\Application;

class ModuleLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        if ( isset($module['load']) ) {
            call_user_func($module['load'], $this->app);
        }

        return $module;
    }
}