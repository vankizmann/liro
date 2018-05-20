<?php

namespace Liro\Menus\Routers;

class RedirectRouter
{

    public function menu($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\RedirectController@menu');
    }

    public function link($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\RedirectController@link');
    }

}
