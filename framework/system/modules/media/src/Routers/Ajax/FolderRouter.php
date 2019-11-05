<?php

namespace Liro\Media\Routers\Ajax;

class FolderRouter
{

    public function index($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Ajax\FolderController@index');
    }

    public function create($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Ajax\FolderController@create');
    }

    public function rename($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Ajax\FolderController@rename');
    }

    public function move($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Ajax\FolderController@move');
    }

    public function delete($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Ajax\FolderController@delete');
    }

}