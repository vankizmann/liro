<?php

namespace Liro\Users\Routers;

class UserRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\UserController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\UserController@create');
        $router->middleware('ajax', 'route')->post('/', 'Liro\Users\Controllers\UserController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{user}', 'Liro\Users\Controllers\UserController@edit');
        $router->middleware('ajax', 'route')->post('{user}', 'Liro\Users\Controllers\UserController@update');
    }

}