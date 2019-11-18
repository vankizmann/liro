<?php

return [

    'name'          => 'liro/web-dashboard',
    'version'       => '1.0.0',
    'type'          => 'package',

    'menus' => [

        'http@web-dashboard.http.folder.index' => [
            'web-dashboard::http.folder.index', 'Liro\Web\Dashboard\Http\Controllers\HttpFolder@routerIndex'
        ],

        'ajax@web-dashboard.ajax.folder.index' => [
            'web-dashboard::ajax.folder.index', 'Liro\Web\Dashboard\Http\Controllers\AjaxFolder@routerIndex'
        ],

    ],

    'autoload' => [
        'Liro\\Web\\Dashboard\\' => 'src/'
    ],

    'providers' => [
        Liro\Web\Dashboard\DashboardServiceProvider::class
    ],


];
