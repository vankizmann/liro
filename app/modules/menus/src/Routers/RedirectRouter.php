<?php

namespace Liro\Menus\Routers;

class RedirectRouter
{

    public function menu($router)
    {
        $router->middleware('web')->get('/', 'Liro\Menus\Controllers\RedirectController@menu');
    }

    public function url($router)
    {
        $router->middleware('web')->get('/', 'Liro\Menus\Controllers\RedirectController@url');
    }

}