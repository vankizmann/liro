<?php

namespace Liro\Languages\Routers;

class LanguageApiRouter
{

    public function index($router)
    {
        $router->middleware('ajax', 'route')->get('/', 'Liro\Languages\Controllers\LanguageApiController@index');
    }

    public function store($router)
    {
        $router->middleware('ajax', 'route')->post('/', 'Liro\Languages\Controllers\LanguageApiController@store');
    }

    public function show($router)
    {
        $router->middleware('ajax', 'route')->get('{language}', 'Liro\Languages\Controllers\LanguageApiController@show');
    }

    public function update($router)
    {
        $router->middleware('ajax', 'route')->put('{language}', 'Liro\Languages\Controllers\LanguageApiController@update');
    }

}