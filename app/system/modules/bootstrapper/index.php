<?php

return [

    'name' => 'system.bootstrapper',

    'boot' => function($app, $module) {

        $app['modules']->load([
            'system.languages', 'system.menus', 'system.users', 'liro.menus', 'liro.users', 'liro.theme'
        ]);

        // $app['modules']->get('system.languages')->install();
        // $app['modules']->get('system.menus')->install();
        // $app['modules']->get('system.users')->install();

        $app['events']->fire('boot', $app);

        // dd(\Liro\System\Users\Models\User::all());
        // dd(\Liro\System\Users\Models\User::find(1)->roles);
        // dd($app['menus'], $app['router']->getRoutes());
    }

];
