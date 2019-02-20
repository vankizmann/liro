<?php

namespace Liro\Users\Routers;

use Liro\Users\Controllers\Admin\AuthController;
use Liro\Users\Controllers\Admin\UserController;

class AdminRouter
{

    public function auth($router, $path, $name)
    {
        $router->middleware('web')->get($path, [AuthController::class, 'login'], [
            'name' => $name . '.login'
        ]);

        $router->middleware('web')->get($path . '/logout', [AuthController::class, 'logout'], [
            'name' => $name . '.logout'
        ]);
    }

    public function user($router, $path, $name)
    {
        $router->middleware('web')->get($path, [UserController::class, 'index'], [
            'name' => $name . '.index'
        ]);

        $router->middleware('web')->get($path, [UserController::class, 'create'], [
            'name' => $name . '.create'
        ]);

        $router->middleware('web')->get($path, [UserController::class, 'edit'], [
            'name' => $name . '.edit'
        ]);
    }

    public function role($router, $path, $name)
    {
        $router->middleware('web')->get($path, [RoleController::class, 'index'], [
            'name' => $name . '.index'
        ]);

        $router->middleware('web')->get($path, [RoleController::class, 'create'], [
            'name' => $name . '.create'
        ]);

        $router->middleware('web')->get($path, [RoleController::class, 'edit'], [
            'name' => $name . '.edit'
        ]);

        dd($router);
    }

}
