<?php

return [

    'name' => 'factory',

    'autoload' => [
        'Factory\\' => ''
    ],

    'events' => [
        'app.boot' => function($wusa) {
            dd($wusa, 'on event boot');
        }
    ],

    'boot' => function($app) {
        dd('on boot function');
    }

];
