<?php

namespace Liro\System\Modules\Loaders;

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
        if ( isset($module['loader']) && is_array($module['loader']) ) {
            $this->app['modules']->append($module['loader']);
        }

        if ( isset($module['boot']) && is_callable($module['boot']) ) {
            call_user_func($module['boot'], $this->app);
        }
        
        return $module;
    }
}
