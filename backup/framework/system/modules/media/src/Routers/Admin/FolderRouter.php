<?php

namespace Liro\Media\Routers\Admin;

class FolderRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Media\Controllers\Admin\FolderController@index');
    }

}