<?php

namespace Liro\Menus\Routers\Ajax;

class MenuRouter
{

    public function index($router)
    {
        $router->middleware('ajax', 'route')->get('/', 'Liro\Menus\Controllers\Ajax\MenuController@index');
    }

    public function store($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Menus\Controllers\Ajax\MenuController@store');
    }

    public function show($router)
    {
        $router->middleware('ajax', 'route')->get('{menu}', 'Liro\Menus\Controllers\Ajax\MenuController@show');
    }

    public function update($router)
    {
        $router->middleware('ajax', 'route')->put('{menu}', 'Liro\Menus\Controllers\Ajax\MenuController@update');
    }

    public function order($router)
    {
        $router->middleware('ajax', 'route')->post('{type?}', 'Liro\Menus\Controllers\Ajax\MenuController@order')->defaults('type', 1);
    }

}