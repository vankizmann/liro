<?php

namespace Liro\Users\Routers;

class AuthRouter
{

    public function login($router)
    {
        $router->middleware('web')->get('/', 'Liro\Users\Controllers\Backend\AuthController@login');
        $router->middleware('web')->post('/', 'Liro\Users\Controllers\Backend\AuthController@submit');
    }

    public function logout($router)
    {
        $router->middleware('web')->get('/', 'Liro\Users\Controllers\Backend\AuthController@logout');
    }

}