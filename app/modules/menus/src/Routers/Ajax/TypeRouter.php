<?php

namespace Liro\Menus\Routers\Ajax;

class TypeRouter
{

    public function index($router)
    {
        $router->middleware('ajax', 'route')->get('/', 'Liro\Menus\Controllers\Ajax\TypeController@index');
    }

    public function store($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Menus\Controllers\Ajax\TypeController@store');
    }

    public function show($router)
    {
        $router->middleware('ajax', 'route')->get('{type}', 'Liro\Menus\Controllers\Ajax\TypeController@show');
    }

    public function update($router)
    {
        $router->middleware('ajax', 'route')->put('{type}', 'Liro\Menus\Controllers\Ajax\TypeController@update');
    }

}