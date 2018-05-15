<?php

namespace Liro\Users\Routers;

class UserRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Backend\UserController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Backend\UserController@create');
        $router->middleware('web', 'route')->post('/', 'Liro\Users\Controllers\Backend\UserController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{user}', 'Liro\Users\Controllers\Backend\UserController@edit');
        $router->middleware('web', 'route')->post('{user}', 'Liro\Users\Controllers\Backend\UserController@update');
    }

    public function enable($router)
    {
        $router->middleware('web', 'route')->get('{user}', 'Liro\Users\Controllers\Backend\UserController@enable');
    }

    public function disable($router)
    {
        $router->middleware('web', 'route')->get('{user}', 'Liro\Users\Controllers\Backend\UserController@disable');
    }

    public function delete($router)
    {
        $router->middleware('web', 'route')->get('{user}', 'Liro\Users\Controllers\Backend\UserController@delete');
    }


}