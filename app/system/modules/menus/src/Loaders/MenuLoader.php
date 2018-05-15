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
        if ( ! is_array($menus = @include $module->path . '/routes.php') ) {
            return $module;
        }

        foreach ( $menus['groups'] as $group => $options ) {
            $this->app['menus']->appendGroup($group, $options);
        }

        foreach ( $menus['routes'] as $route => $options ) {
            $this->app['menus']->appendRoute($route, $options);
        }
        
        return $module;
    }
}
