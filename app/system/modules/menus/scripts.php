<?php

use Illuminate\Database\Schema\Blueprint;
use Kalnoy\Nestedset\NestedSet;

return [

    'install' => function($app) {

        $schema = $app['db']->getSchemaBuilder();

        $schema->dropIfExists('menu_types');

        if ( ! $schema->hasTable('menu_types') )

            $schema->create('menu_types', function(Blueprint $table) {
                $table->increments('id');
                $table->string('title');
                $table->string('route');
                $table->string('theme');
                $table->timestamps();
            });

            $app['db']->table('menu_types')->insert([
                'title' => 'Backend Main Menu',
                'route' => 'backend',
                'theme' => 'liro-backend'
            ]);

            $app['db']->table('menu_types')->insert([
                'title' => 'Backend User Menu',
                'route' => 'backend',
                'theme' => 'liro-backend'
            ]);

            $app['db']->table('menu_types')->insert([
                'title' => 'Main Menu',
                'route' => '',
                'theme' => 'liro-frontend'
            ]);

            $app['db']->table('menu_types')->insert([
                'title' => 'User Menu',
                'route' => '',
                'theme' => 'liro-frontend'
            ]);
        
        $schema->dropIfExists('menus');

        if ( ! $schema->hasTable('menus') )

            $schema->create('menus', function(Blueprint $table) {
                $table->increments('id');
                $table->integer('state');
                $table->string('lang');
                $table->string('title');
                $table->string('route');
                $table->string('package');
                $table->string('query');
                $table->string('hidden');
                $table->integer('menu_type_id');
                $table->timestamps();
                NestedSet::columns($table);
            });

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => 'Home',
                'route'             => '',
                'query'             => '',
                'package'           => 'liro-dashboard.backend.dashboard.index',
                'menu_type_id'      => 1
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-users.backend.users.index',
                'route'             => 'users',
                'query'             => '',
                'package'           => 'liro-users.backend.users.index',
                'menu_type_id'      => 1
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-users.backend.users.create',
                'route'             => 'create',
                'query'             => '',
                'package'           => 'liro-users.backend.users.create',
                'menu_type_id'      => 1,
                'parent_id'         => 2,
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 1,
                'lang'              => '',
                'title'             => '*.liro-users.backend.users.edit',
                'route'             => 'edit',
                'query'             => '',
                'package'           => 'liro-users.backend.users.edit',
                'menu_type_id'      => 1,
                'parent_id'         => 2
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-users.backend.roles.index',
                'route'             => 'roles',
                'query'             => '',
                'package'           => 'liro-users.backend.roles.index',
                'menu_type_id'      => 1
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-users.backend.roles.create',
                'route'             => 'create',
                'query'             => '',
                'package'           => 'liro-users.backend.roles.create',
                'menu_type_id'      => 1,
                'parent_id'         => 5,
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 1,
                'lang'              => '',
                'title'             => '*.liro-users.backend.roles.edit',
                'route'             => 'edit',
                'query'             => '',
                'package'           => 'liro-users.backend.roles.edit',
                'menu_type_id'      => 1,
                'parent_id'         => 5
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-menus.backend.menus.index',
                'route'             => 'menus',
                'query'             => '',
                'package'           => 'liro-menus.backend.menus.index',
                'menu_type_id'      => 1
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-menus.backend.menus.create',
                'route'             => 'create',
                'query'             => '',
                'package'           => 'liro-menus.backend.menus.create',
                'menu_type_id'      => 1,
                'parent_id'         => 8
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 1,
                'lang'              => '',
                'title'             => '*.liro-menus.backend.menus.edit',
                'route'             => 'edit',
                'query'             => '',
                'package'           => 'liro-menus.backend.menus.edit',
                'menu_type_id'      => 1,
                'parent_id'         => 8
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-menus.backend.types.index',
                'route'             => 'menutype',
                'query'             => '',
                'package'           => 'liro-menus.backend.types.index',
                'menu_type_id'      => 1
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-menus.backend.types.create',
                'route'             => 'create',
                'query'             => '',
                'package'           => 'liro-menus.backend.types.create',
                'menu_type_id'      => 1,
                'parent_id'         => 11
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 1,
                'lang'              => '',
                'title'             => '*.liro-menus.backend.types.edit',
                'route'             => 'edit',
                'query'             => '',
                'package'           => 'liro-menus.backend.types.edit',
                'menu_type_id'      => 1,
                'parent_id'         => 11
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-users.backend.auth.login',
                'route'             => 'login',
                'query'             => '',
                'package'           => 'liro-users.backend.auth.login',
                'menu_type_id'      => 2
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-users.backend.auth.logout',
                'route'             => 'logout',
                'query'             => '',
                'package'           => 'liro-users.backend.auth.logout',
                'menu_type_id'      => 2
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => 'Home',
                'route'             => '',
                'query'             => '',
                'package'           => 'system.test.backend.home',
                'menu_type_id'      => 3
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-users.backend.auth.login',
                'route'             => 'login',
                'query'             => '',
                'package'           => 'liro-users.frontend.login',
                'menu_type_id'      => 4
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.liro-users.backend.auth.logout',
                'route'             => 'logout',
                'query'             => '',
                'package'           => 'liro-users.frontend.logout',
                'menu_type_id'      => 4
            ]);
        
        return;
    }

];
