<?php

return [

    'name'          => 'web-dashboard',
    'version'       => '1.0.0',
    'type'          => 'package',

    'autoload' => [
        'Liro\\Web\\Dashboard\\' => 'src/'
    ],

    'providers' => [
        Liro\Web\Dashboard\DashboardServiceProvider::class
    ],

    'extensions' => [

        'WebDashboardIndex' => [
            'web-dashboard::js/web-dashboard.js',
            'web-dashboard::css/web-dashboard.css'
        ],

    ]


];
