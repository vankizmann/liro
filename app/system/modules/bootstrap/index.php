<?php

return [

    'name' => 'system.bootstrap',

    'boot' => function($app, $module) {

        $app['modules']->load([
            'system.assets', 'system.languages', 'system.menus', 'system.users', 'liro.menus', 'liro.users', 'liro.theme'
        ]);

        $app['scripts']->link('bootstrap', '/app/system/modules/bootstrap/resources/dist/js/bootstrap.js');
        $app['scripts']->link('app', '/app/system/modules/bootstrap/resources/dist/js/app.js');
        
        $app['router']->get('reset', function() use ($app) {
            
            $app['modules']->get('system.languages')->install();
            $app['modules']->get('system.menus')->install();
            $app['modules']->get('system.users')->install();

            Liro\System\Menus\Models\Menu::fixTree();

            return 'reset done.';
        });

        $app['events']->fire('boot', $app);
    }

];
