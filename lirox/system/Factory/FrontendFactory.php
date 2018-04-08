<?php

namespace Lirox\System\Factory;

use Lirox\System\Factory\BaseFactory;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

class FrontendFactory extends BaseFactory
{

    public function boot($app)
    {
        DB::connection()->enableQueryLog();

        $routes = collect([
            [
                'name' => 'demo',
                'route' => 'demo',
                'callback' => function() {
                    echo 'demo';
                }
            ],
            [
                'name' => 'demo.test',
                'route' => 'demo/test',
                'callback' => function() {
                    echo 'demo and test';
                }
            ],
            [
                'name' => 'test',
                'route' => 'test',
                'callback' => function() {
                    echo 'du nicht';
                }
            ],
        ]);

        $routes->map(function($item) use ($app) {
            $app->get($item['route'], $item['callback'])->name($item['name']);
        });


        // var_dump(DB::getQueryLog());
    }

}