<?php

namespace Liro\Media\Routers\Ajax;

class FileRouter
{

    public function rename($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Ajax\FileController@rename');
    }

    public function upload($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Ajax\FileController@upload');
    }

    public function delete($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Media\Controllers\Ajax\FileController@delete');
    }

}