<?php

namespace Liro\Menus\Routers\User;

class RedirectRouter
{

    public function menu($router)
    {
        $router->middleware('web')->get('/', 'Liro\Menus\Controllers\User\RedirectController@menu');
    }

    public function url($router)
    {
        $router->middleware('web')->get('/', 'Liro\Menus\Controllers\User\RedirectController@url');
    }

}