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

}