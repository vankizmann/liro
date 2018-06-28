<?php

namespace Liro\Media\Routers;

class MediaRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Media\Controllers\Backend\MediaController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Media\Controllers\Backend\MediaController@create');
        $router->middleware('web', 'route')->post('/', 'Liro\Media\Controllers\Backend\MediaController@store');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{role}', 'Liro\Media\Controllers\Backend\MediaController@edit');
        $router->middleware('web', 'route')->post('{role}', 'Liro\Media\Controllers\Backend\MediaController@update');
    }

    public function delete($router)
    {
        $router->middleware('web', 'route')->get('{role}', 'Liro\Media\Controllers\Backend\MediaController@delete');
    }

}