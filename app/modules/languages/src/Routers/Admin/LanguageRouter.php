<?php

namespace Liro\Languages\Routers\Admin;

class LanguageRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Languages\Controllers\Admin\LanguageController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Languages\Controllers\Admin\LanguageController@create');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{language}', 'Liro\Languages\Controllers\Admin\LanguageController@edit');
    }

}