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
                $table->timestamps();
            });

            $app['db']->table('menu_types')->insert([
                'title' => 'Backend Main Menu',
                'route' => 'backend'
            ]);

            $app['db']->table('menu_types')->insert([
                'title' => 'Backend User Menu',
                'route' => 'backend'
            ]);

            $app['db']->table('menu_types')->insert([
                'title' => 'Main Menu',
                'route' => ''
            ]);

            $app['db']->table('menu_types')->insert([
                'title' => 'User Menu',
                'route' => ''
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
                'package'           => 'liro.dashboard.backend.dashboard.index',
                'menu_type_id'      => 1,
                '_lft'              => 1,
                '_rgt'              => 2
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.users.module.users-index',
                'route'             => 'users',
                'query'             => '',
                'package'           => 'liro.users.backend.users.index',
                'menu_type_id'      => 1,
                '_lft'              => 3,
                '_rgt'              => 8
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.users.module.users-create',
                'route'             => 'create',
                'query'             => '',
                'package'           => 'liro.users.backend.users.create',
                'menu_type_id'      => 1,
                'parent_id'         => 2,
                '_lft'              => 4,
                '_rgt'              => 5
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 0,
                'hidden'            => 1,
                'lang'              => '',
                'title'             => '*.users.module.users-edit',
                'route'             => 'edit',
                'query'             => '',
                'package'           => 'liro.users.backend.users.edit',
                'menu_type_id'      => 1,
                'parent_id'         => 2,
                '_lft'              => 6,
                '_rgt'              => 7
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.menus.module.menus-index',
                'route'             => 'menus',
                'query'             => '',
                'package'           => 'liro.menus.backend.menus.index',
                'menu_type_id'      => 1,
                '_lft'              => 9,
                '_rgt'              => 14
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.menus.module.menus-create',
                'route'             => 'create',
                'query'             => '',
                'package'           => 'liro.menus.backend.menus.create',
                'menu_type_id'      => 1,
                'parent_id'         => 5,
                '_lft'              => 10,
                '_rgt'              => 11
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 1,
                'lang'              => '',
                'title'             => '*.menus.module.menus-edit',
                'route'             => 'edit',
                'query'             => '',
                'package'           => 'liro.menus.backend.menus.edit',
                'menu_type_id'      => 1,
                'parent_id'         => 5,
                '_lft'              => 12,
                '_rgt'              => 13
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.menus.module.types-index',
                'route'             => 'menutype',
                'query'             => '',
                'package'           => 'liro.menus.backend.types.index',
                'menu_type_id'      => 1,
                '_lft'              => 15,
                '_rgt'              => 20
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.menus.module.types-create',
                'route'             => 'create',
                'query'             => '',
                'package'           => 'liro.menus.backend.types.create',
                'menu_type_id'      => 1,
                'parent_id'         => 8,
                '_lft'              => 16,
                '_rgt'              => 17
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 1,
                'lang'              => '',
                'title'             => '*.menus.module.types-edit',
                'route'             => 'create',
                'query'             => '',
                'package'           => 'liro.menus.backend.types.create',
                'menu_type_id'      => 1,
                'parent_id'         => 8,
                '_lft'              => 18,
                '_rgt'              => 19
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.users.module.auth-login',
                'route'             => 'login',
                'query'             => '',
                'package'           => 'liro.users.backend.auth.login',
                'menu_type_id'      => 2,
                '_lft'              => 1,
                '_rgt'              => 2
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.users.module.auth-logout',
                'route'             => 'logout',
                'query'             => '',
                'package'           => 'liro.users.backend.auth.logout',
                'menu_type_id'      => 2,
                '_lft'              => 3,
                '_rgt'              => 4
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => 'Home',
                'route'             => '',
                'query'             => '',
                'package'           => 'system.test.backend.home',
                'menu_type_id'      => 3,
                '_lft'              => 1,
                '_rgt'              => 2
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.users.module.auth-login',
                'route'             => 'login',
                'query'             => '',
                'package'           => 'liro.users.frontend.login',
                'menu_type_id'      => 4,
                '_lft'              => 1,
                '_rgt'              => 2
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'hidden'            => 0,
                'lang'              => '',
                'title'             => '*.users.module.auth-logout',
                'route'             => 'logout',
                'query'             => '',
                'package'           => 'liro.users.frontend.logout',
                'menu_type_id'      => 4,
                '_lft'              => 3,
                '_rgt'              => 4
            ]);
        
        return;
    }

];
