<?php

namespace Liro\System\Menus\Loaders;

use Illuminate\Contracts\Foundation\Application;
use Liro\System\Modules\Loaders\LoaderInterface;

class MenuLoader implements LoaderInterface
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load($module)
    {
        foreach (@$module['routes'] ?: [] as $name => $handler) {
            $this->app['menus']->append($name, $handler, $module['name']);
        }
        
        return $module;
    }
}
