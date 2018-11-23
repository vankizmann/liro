<?php

namespace Liro\Users\Routers;

class RoleRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\RoleController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\RoleController@create');
        $router->middleware('ajax', 'route')->post('/', 'Liro\Users\Controllers\RoleController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{role}', 'Liro\Users\Controllers\RoleController@edit');
        $router->middleware('ajax', 'route')->post('{role}', 'Liro\Users\Controllers\RoleController@update');
    }

}