<?php

namespace Liro\Media\Routers;

class MediaRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Media\Controllers\Backend\MediaController@index');
    }

    public function move($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Backend\MediaController@move');
    }

    public function delete($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Backend\MediaController@delete');
    }

    public function upload($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Backend\MediaController@upload');
    }

    public function folder($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Backend\MediaController@folder');
    }

}