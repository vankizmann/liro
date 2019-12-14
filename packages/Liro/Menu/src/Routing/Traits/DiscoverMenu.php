<?php

namespace Liro\Menu\Routing\Traits;

trait DiscoverMenu
{
    public $menu = null;

    public function initializeDiscoverMenu()
    {
        $route = app('router')->getCurrentRoute();

        if ( ! isset($route->action['menu']) ) {
            return;
        }

        view()->share('menu', $this->menu = $route->action['menu']);
    }

}
