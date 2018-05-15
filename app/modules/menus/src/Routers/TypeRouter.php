<?php

namespace Liro\Menus\Routers;

class TypeRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\TypeController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\TypeController@create');
        $router->middleware('web', 'route')->post('/', 'Liro\Menus\Controllers\Backend\TypeController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{type}', 'Liro\Menus\Controllers\Backend\TypeController@edit');
        $router->middleware('web', 'route')->post('{type}', 'Liro\Menus\Controllers\Backend\TypeController@update');
    }

    public function delete($router)
    {
        $router->middleware('web', 'route')->get('{type}', 'Liro\Menus\Controllers\Backend\TypeController@delete');
    }

}