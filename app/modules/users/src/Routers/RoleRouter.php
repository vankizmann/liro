<?php

namespace Liro\Users\Routers;

class RoleRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Backend\RoleController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Backend\RoleController@create');
        $router->middleware('web', 'route')->post('/', 'Liro\Users\Controllers\Backend\RoleController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{user}', 'Liro\Users\Controllers\Backend\RoleController@edit');
        $router->middleware('web', 'route')->post('{user}', 'Liro\Users\Controllers\Backend\RoleController@update');
    }

    public function delete($router)
    {
        $router->middleware('web', 'route')->get('{role}', 'Liro\Users\Controllers\Backend\RoleController@delete');
    }

}