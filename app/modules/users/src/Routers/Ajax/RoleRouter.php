<?php

namespace Liro\Users\Routers\Ajax;

class RoleRouter
{

    public function index($router)
    {
        $router->middleware('ajax')->group(function ($router) {
            $router->resource('/', 'Liro\Users\Controllers\Ajax\RoleController', ['name' => 'role']);
        });
    }

}
