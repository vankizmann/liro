<?php

namespace Liro\System\Modules\Loaders;

use Illuminate\Contracts\Foundation\Application;

class DefaultLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        $loaders = $module->config('loader');

        if ( $loaders && is_array($loaders) ) {
            $this->app['modules']->append($loaders);
        }

        $boot = $module->config('boot');

        if ( $boot && is_callable($boot) ) {
            call_user_func($boot, $this->app, $module);
        }
        
        return $module;
    }
}
