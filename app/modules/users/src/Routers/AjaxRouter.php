<?php

namespace Liro\Users\Routers;

use Liro\Users\Controllers\Ajax\AuthController;
use Liro\Users\Controllers\Ajax\UserController;

class AjaxRouter
{

    public function auth($router, $path, $name)
    {
        $router->middleware('ajax')->post($path, [AuthController::class, 'login'], [
            'name' => $name . '.login'
        ]);
    }

    public function user($router, $path, $name)
    {
        $router->middleware('ajax')->resource($path, UserController::class, [
            'names' => $name
        ]);
    }

    public function role($router, $path, $name)
    {
        $router->middleware('ajax')->resource($path, RoleController::class, [
            'names' => $name
        ]);
    }

}
