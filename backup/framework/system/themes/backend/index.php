<?php

return [
    'name'          => 'liro-backend',
    'version'       => '1.0.0',
    'type'          => 'theme',

    'autoload' => [
        'Liro\\Theme\\Backend\\' => 'src/'
    ],

    'handler' => [
        'vue' => 'Liro\\Theme\\Backend\\Views\\VueHandler@render',
        'error' => 'Liro\\Theme\\Backend\\Views\\ErrorHandler@render',
    ],

];
