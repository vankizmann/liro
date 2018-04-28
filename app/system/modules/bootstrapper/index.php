<?php

return [

    'name' => 'system.bootstrapper',

    'boot' => function($app) {

        $app['modules']->load([
            'system.languages', 'system.menus', 'system.test'
        ]);

        $app['events']->fire('boot', $app);
    }

];
