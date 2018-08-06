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
        $router->middleware('ajax', 'route')->post('/', 'Liro\Users\Controllers\Backend\UserController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{user}', 'Liro\Users\Controllers\Backend\UserController@edit');
        $router->middleware('ajax', 'route')->post('{user}', 'Liro\Users\Controllers\Backend\UserController@update');
    }

    public function enable($router)
    {
        $router->middleware('ajax', 'route')->any('{user}', 'Liro\Users\Controllers\Backend\UserController@enable');
    }

    public function disable($router)
    {
        $router->middleware('ajax', 'route')->any('{user}', 'Liro\Users\Controllers\Backend\UserController@disable');
    }

    public function delete($router)
    {
        $router->middleware('ajax', 'route')->any('{user}', 'Liro\Users\Controllers\Backend\UserController@delete');
    }


}