<?php

namespace Liro\Users\Routers\Ajax;

class UserRouter
{

    public function index($router)
    {
        $router->middleware('ajax', 'route')->get('/', 'Liro\Users\Controllers\UserApiController@index');
    }

    public function store($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Users\Controllers\UserApiController@store');
    }

    public function show($router)
    {
        $router->middleware('ajax', 'route')->get('{user}', 'Liro\Users\Controllers\UserApiController@show');
    }

    public function update($router)
    {
        $router->middleware('ajax', 'route')->put('{user}', 'Liro\Users\Controllers\UserApiController@update');
    }

}