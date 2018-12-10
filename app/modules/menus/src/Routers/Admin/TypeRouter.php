<?php

namespace Liro\Menus\Routers\Admin;

class TypeRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Admin\TypeController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Admin\TypeController@create');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{type}', 'Liro\Menus\Controllers\Admin\TypeController@edit');
    }

}