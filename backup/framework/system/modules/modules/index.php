<?php

return [

    'name'          => 'liro-modules',
    'version'       => '1.0.0',
    'type'          => 'extension',

    'autoload' => [
        'Liro\\Extension\\Modules\\' => 'src/'
    ],

    'providers' => [
        Liro\Extension\Modules\Providers\ModuleServiceProvider::class
    ]

];
