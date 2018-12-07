<?php

namespace Liro\Users\Routers\Ajax;

class AuthRouter
{

    public function login($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Users\Controllers\Ajax\AuthController@login');
    }

    public function token($router)
    {
        $router->middleware('ajax', 'route')->get('/', 'Liro\Users\Controllers\Ajax\AuthController@token');
    }

}