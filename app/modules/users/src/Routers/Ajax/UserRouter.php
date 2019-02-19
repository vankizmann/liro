<?php

namespace Liro\Users\Routers\Ajax;

class UserRouter
{

    public function index($router)
    {
        $router->middleware('ajax')->group(function ($router) {
            $router->resource('user', 'Liro\Users\Controllers\Ajax\UserController', ['prefix' => '/']);
        });

        dd($router);
    }

}
