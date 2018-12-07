<?php

namespace Liro\Users\Routers\Admin;

class RoleRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Admin\RoleController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Users\Controllers\Admin\RoleController@create');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{role}', 'Liro\Users\Controllers\Admin\RoleController@edit');
    }

}