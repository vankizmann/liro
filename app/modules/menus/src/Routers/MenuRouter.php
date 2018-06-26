<?php

namespace Liro\Menus\Routers;

class MenuRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\MenuController@index');
    }

    public function order($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Menus\Controllers\Backend\MenuController@order');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Backend\MenuController@create');
        $router->middleware('ajax', 'route')->post('/', 'Liro\Menus\Controllers\Backend\MenuController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@edit');
        $router->middleware('ajax', 'route')->post('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@update');
    }

    public function delete($router)
    {
        $router->middleware('ajax', 'route')->any('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@delete');
    }

    public function enable($router)
    {
        $router->middleware('ajax', 'route')->any('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@enable');
    }

    public function disable($router)
    {
        $router->middleware('ajax', 'route')->any('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@disable');
    }

    public function visible($router)
    {
        $router->middleware('ajax', 'route')->any('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@visible');
    }

    public function hidden($router)
    {
        $router->middleware('ajax', 'route')->any('{menu}', 'Liro\Menus\Controllers\Backend\MenuController@hidden');
    }

}
