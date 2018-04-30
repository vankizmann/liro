<?php

use Illuminate\Database\Schema\Blueprint;

return [

    'install' => function($app) {

        $schema = $app['db']->getSchemaBuilder();

        $schema->dropIfExists('user_role_routes');

        if ( ! $schema->hasTable('user_role_routes') )

            $schema->create('user_role_routes', function(Blueprint $table) {
                $table->increments('id');
                $table->integer('user_role_id');
                $table->string('route');
                $table->timestamps();
            });

            $app['db']->table('user_role_routes')->insert([
                'user_role_id'  => 1,
                'route'         => 'liro.users.backend.logout'
            ]);

            $app['db']->table('user_role_routes')->insert([
                'user_role_id'  => 1,
                'route'         => 'liro.users.backend.users'
            ]);

            $app['db']->table('user_role_routes')->insert([
                'user_role_id'  => 1,
                'route'         => 'liro.menus.backend.menus'
            ]);

        $schema->dropIfExists('user_role_link');

        if ( ! $schema->hasTable('user_role_link') )

            $schema->create('user_role_link', function(Blueprint $table) {
                $table->increments('id');
                $table->integer('user_id');
                $table->integer('user_role_id');
                $table->timestamps();
            });

            $app['db']->table('user_role_link')->insert([
                'user_id'       => 1,
                'user_role_id'  => 1
            ]);

            $app['db']->table('user_role_link')->insert([
                'user_id'       => 1,
                'user_role_id'  => 2
            ]);

            $app['db']->table('user_role_link')->insert([
                'user_id'       => 2,
                'user_role_id'  => 2
            ]);

        $schema->dropIfExists('user_roles');

        if ( ! $schema->hasTable('user_roles') )

            $schema->create('user_roles', function(Blueprint $table) {
                $table->increments('id');
                $table->string('title');
                $table->string('description');
                $table->string('access');
                $table->timestamps();
            });

            $app['db']->table('user_roles')->insert([
                'title'         => 'Admin',
                'access'        => 'admin',
                'description'   => 'A admin user with backend access.'
            ]);

            $app['db']->table('user_roles')->insert([
                'title'         => 'User',
                'access'        => 'user',
                'description'   => 'A regular user without backend access.'
            ]);

        $schema->dropIfExists('users');

        if ( ! $schema->hasTable('users') )

            $schema->create('users', function(Blueprint $table) {
                $table->increments('id');
                $table->integer('state');
                $table->string('name');
                $table->string('email');
                $table->string('password');
                $table->rememberToken();
                $table->timestamps();
            });

            $app['db']->table('users')->insert([
                'state'         => 1,
                'name'          => 'admin',
                'email'         => 'admin@gmail.com',
                'password'      => bcrypt('password'),
            ]);

            $app['db']->table('users')->insert([
                'state'         => 1,
                'name'          => 'user',
                'email'         => 'user@gmail.com',
                'password'      => bcrypt('password'),
            ]);
        
        return;
    }

];
