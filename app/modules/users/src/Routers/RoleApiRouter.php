<?php

namespace Liro\Users\Routers;

class RoleApiRouter
{

    public function index($router)
    {
        $router->middleware('ajax', 'route')->get('/', 'Liro\Users\Controllers\RoleApiController@index');
    }

    public function store($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Users\Controllers\RoleApiController@store');
    }

    public function show($router)
    {
        $router->middleware('ajax', 'route')->get('{role}', 'Liro\Users\Controllers\RoleApiController@show');
    }

    public function update($router)
    {
        $router->middleware('ajax', 'route')->put('{role}', 'Liro\Users\Controllers\RoleApiController@update');
    }

}