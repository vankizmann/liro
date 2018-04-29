<?php

use Illuminate\Database\Schema\Blueprint;

return [

    'install' => function($app) {

        $schema = $app['db']->getSchemaBuilder();

        $schema->dropIfExists('languages');

        if ( ! $schema->hasTable('languages') )

            $schema->create('languages', function(Blueprint $table) {
                $table->increments('id');
                $table->integer('state');
                $table->string('title');
                $table->string('locale');
                $table->integer('default');
                $table->timestamps();
            });

            $app['db']->table('languages')->insert([
                'state'         => 1,
                'title'         => 'Deutsch',
                'locale'        => 'de',
                'default'       => 1
            ]);
            
            $app['db']->table('languages')->insert([
                'state'         => 1,
                'title'         => 'English',
                'locale'        => 'en',
                'default'       => 0
            ]);

            $app['db']->table('languages')->insert([
                'state'         => 0,
                'title'         => 'русский',
                'locale'        => 'ru',
                'default'       => 0
            ]);
        
        return;
    }

];
