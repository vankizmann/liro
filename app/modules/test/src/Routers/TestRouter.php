<?php

namespace Liro\Test\Routers;

class TestRouter
{

    public function test($router)
    {
        $router->middleware('web', 'route')->any('/', function () {
            return view('liro-test::test');
        });
    }

    public function error($router)
    {
        $router->middleware('web')->any('/', function () {
            return view('liro-test::error', [
                'error' => new \Exception('Page not found', 404)
            ]);
        });
    }

    public function login($router)
    {
        $router->middleware('web')->any('/', function () {
            return view('liro-test::login');
        });
    }

}