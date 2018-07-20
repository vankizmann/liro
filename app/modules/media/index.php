<?php

return [

    'name' => 'liro-media',

    'autoload' => [
        'Liro\\Media\\' => 'src/'
    ],

    'boot' => function() {
        include_once('src/functions.php');
    }

];
