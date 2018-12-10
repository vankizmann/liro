<?php

namespace Liro\Menus\Routers\Admin;

class MenuRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('{type?}', 'Liro\Menus\Controllers\Admin\MenuController@index')->defaults('type', 1);
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\Admin\MenuController@create');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\Admin\MenuController@edit');
    }

}