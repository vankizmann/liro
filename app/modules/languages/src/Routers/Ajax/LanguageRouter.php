<?php

namespace Liro\Languages\Routers\Ajax;

class LanguageRouter
{

    public function index($router)
    {
        $router->middleware('ajax', 'route')->get('/', 'Liro\Languages\Controllers\Ajax\LanguageController@index');
    }

    public function store($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Languages\Controllers\Ajax\LanguageController@store');
    }

    public function show($router)
    {
        $router->middleware('ajax', 'route')->get('{language}', 'Liro\Languages\Controllers\Ajax\LanguageController@show');
    }

    public function update($router)
    {
        $router->middleware('ajax', 'route')->put('{language}', 'Liro\Languages\Controllers\Ajax\LanguageController@update');
    }

}