<?php

namespace Liro\Dashboard\Routers;

class DashboardRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Dashboard\Controllers\Backend\DashboardController@index');
    }

}