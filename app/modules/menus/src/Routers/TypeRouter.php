<?php

namespace Liro\Menus\Routers;

class TypeRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\TypeController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\TypeController@create');
        $router->middleware('ajax', 'route')->post('/', 'Liro\Menus\Controllers\TypeController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{type}', 'Liro\Menus\Controllers\TypeController@edit');
        $router->middleware('ajax', 'route')->post('{type}', 'Liro\Menus\Controllers\TypeController@update');
    }

}