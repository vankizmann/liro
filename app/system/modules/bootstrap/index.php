<?php

return [

    'name' => 'system.bootstrap',

    'boot' => function ($app, $module) {

        $app['modules']->load([
            'system.assets', 'system.languages', 'system.menus', 'system.users',
            'liro-dashboard', 'liro-menus', 'liro-users', 'liro-media',
        ]);

        $app['router']->get('/', function () use ($app) {
            return redirect($app->getLocale());
        });

        $app['events']->fire('boot', $app);

        $app['scripts']->link('vendor', '/app/system/modules/bootstrap/resources/dist/vendor.js');
        $app['scripts']->link('app', '/app/system/modules/bootstrap/resources/dist/app.js');

        $messages = $app['translator']->getFromJson('*', []);
        $app['scripts']->plain('messages', 'liro.message.$set(' . json_encode($messages) . ');');

        // dd($app['router']);
    }

];
