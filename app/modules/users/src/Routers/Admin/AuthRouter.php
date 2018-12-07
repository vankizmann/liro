<?php

namespace Liro\Users\Routers\Admin;

class AuthRouter
{

    public function login($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Admin\AuthController@login');
    }

    public function logout($router)
    {
        $router->middleware('web', 'route')->any('/', 'Liro\Users\Controllers\Admin\AuthController@logout');
    }

}