<?php

namespace Liro\Users\Routers\Admin;

class UserRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Admin\UserController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Admin\UserController@create');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{user}', 'Liro\Users\Controllers\Admin\UserController@edit');
    }

}