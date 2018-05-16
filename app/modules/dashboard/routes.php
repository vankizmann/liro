<?php

return [

    'groups' => [

        'liro-dashboard.backend.dashboard' => [
            'title' => 'liro-dashboard.backend.dashboard.group'
        ]

    ],

    'routes' => [

        'liro-dashboard.backend.dashboard.index' => [
            'group'         => 'liro-dashboard.backend.dashboard',
            'title'         => 'liro-dashboard.backend.dashboard.index',
            'handler'       => 'Liro\Dashboard\Routers\DashboardRouter@index'
        ]

    ]

];