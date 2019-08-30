<?php

return [

    'liro-system.admin.dashboard.index' => [
        'uses' => 'Liro\Extension\System\Http\Controllers\Admin\DashboardController@index',
        'method' => 'get'
    ],

    'liro-system.user.dashboard.index' => [
        'uses' => 'Liro\Extension\System\Http\Controllers\User\DashboardController@index',
        'method' => 'get'
    ]

];
