<?php

namespace Liro\Users\Routers;

class AuthRouter
{

    public function login($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\AuthController@login');
        $router->middleware('ajax', 'route')->post('/', 'Liro\Users\Controllers\AuthController@submit');
    }

    public function logout($router)
    {
        $router->middleware('web', 'route')->any('/', 'Liro\Users\Controllers\AuthController@logout');
    }

}