<?php

namespace Liro\Languages\Routers;

class LanguageRouter
{

    public function index($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Languages\Controllers\LanguageController@index');
    }

    public function create($router)
    {
        $router->middleware('web', 'route')->get('/', 'Liro\Languages\Controllers\LanguageController@create');
    }

    public function edit($router)
    {
        $router->middleware('web', 'route')->get('{language}', 'Liro\Languages\Controllers\LanguageController@edit');
    }

}