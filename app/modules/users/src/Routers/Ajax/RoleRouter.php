<?php

namespace Liro\Users\Routers\Ajax;

class RoleRouter
{

    public function index($router)
    {
        $router->middleware('ajax', 'route')->get('/', 'Liro\Users\Controllers\Ajax\RoleApiController@index');
    }

    public function store($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Users\Controllers\Ajax\RoleApiController@store');
    }

    public function show($router)
    {
        $router->middleware('ajax', 'route')->get('{role}', 'Liro\Users\Controllers\Ajax\RoleApiController@show');
    }

    public function update($router)
    {
        $router->middleware('ajax', 'route')->put('{role}', 'Liro\Users\Controllers\Ajax\RoleApiController@update');
    }

}