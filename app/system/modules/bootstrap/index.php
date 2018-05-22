<?php

return [

    'name' => 'system.bootstrap',

    'boot' => function($app, $module) {

        $app['modules']->load([
            'system.assets', 'system.languages', 'system.menus', 'system.users', 
            'liro-dashboard', 'liro-menus', 'liro-users'
        ]);

        $app['router']->get('/', function() use ($app) {
            return redirect($app->getLocale());
        });

        $app['router']->get('reset', function() use ($app) {

            $app['db']->getSchemaBuilder()->defaultStringLength(191);
            
            $app['modules']->get('system.languages')->install();
            $app['modules']->get('system.menus')->install();
            $app['modules']->get('system.users')->install();

            foreach ( Liro\System\Menus\Models\MenuType::all() as $type ) {
                Liro\System\Menus\Models\Menu::scoped([ 'menu_type_id' => $type->id ])->fixTree();
            }

            return 'reset done.';
        });

        $app['events']->fire('boot', $app);

        $app['scripts']->link('vendor', '/app/system/modules/bootstrap/resources/dist/vendor.js');
        $app['scripts']->link('app', '/app/system/modules/bootstrap/resources/dist/app.js');

        $messages = $app['translator']->getFromJson('*', []);
        $app['scripts']->plain('messages', 'liro.message.$set(' . json_encode($messages) . ');'); 

        // dd($app['router']);
    }

];
