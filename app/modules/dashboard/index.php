<?php

return [

    'name' => 'liro.dashboard',

    'autoload' => [
        'Liro\\Dashboard\\' => 'src/'
    ],

    'routes' => [

        'backend.dashboard.index' => function($route) {
            return $route->middleware(['web', 'role:admin'])->get('/', 'Liro\Dashboard\Controllers\Backend\DashboardController@index');
        },

    ]

];
