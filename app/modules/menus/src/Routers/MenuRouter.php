<?php

namespace Liro\Menus\Routers;

use Liro\System\Menus\Models\MenuType;

class MenuRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('{type?}', 'Liro\Menus\Controllers\MenuController@index')->defaults('type', MenuType::first()->id);
        $router->middleware('ajax', 'route')->post('{type?}', 'Liro\Menus\Controllers\MenuController@order')->defaults('type', MenuType::first()->id);
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Menus\Controllers\MenuController@create');
        $router->middleware('ajax', 'route')->post('/', 'Liro\Menus\Controllers\MenuController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{menu}', 'Liro\Menus\Controllers\MenuController@edit');
        $router->middleware('ajax', 'route')->post('{menu}', 'Liro\Menus\Controllers\MenuController@update');
    }

}