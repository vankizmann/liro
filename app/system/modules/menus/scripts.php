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
                'title' => 'Backend Menu',
                'route' => 'backend'
            ]);

            $app['db']->table('menu_types')->insert([
                'title' => 'Main Menu',
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
                $table->integer('menu_type_id');
                $table->timestamps();
                NestedSet::columns($table);
            });

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'lang'              => '*',
                'title'             => 'Home',
                'route'             => '',
                'query'             => '',
                'package'           => 'system.test.backend.home',
                'menu_type_id'      => 1
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'lang'              => '*',
                'title'             => 'Login',
                'route'             => 'login',
                'query'             => '',
                'package'           => 'liro.users.backend.login',
                'menu_type_id'      => 1
            ]);
            
            $app['db']->table('menus')->insert([
                'state'             => 1,
                'lang'              => '*',
                'title'             => 'Menus',
                'route'             => 'menus',
                'query'             => '',
                'package'           => 'liro.menus.backend.index',
                'menu_type_id'      => 1
            ]);

            $app['db']->table('menus')->insert([
                'state'             => 1,
                'lang'              => '*',
                'title'             => 'Home',
                'route'             => '',
                'query'             => '',
                'package'           => 'system.test.backend.home',
                'menu_type_id'      => 2
            ]);
        
        return;
    }

];
