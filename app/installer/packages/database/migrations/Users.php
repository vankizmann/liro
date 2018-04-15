<?php

if ( $schema->hasTable('users') ) {
    return;
}

$schema->create('users', function ($table) {
    $table->increments('id');
    $table->string('name');
    $table->string('email')->unique();
    $table->string('password');
    $table->rememberToken();
    $table->timestamps();
});

$db->table('users')->insert([
    'name' => 'admin',
    'email' => 'admin@gmail.com',
    'password' => bcrypt('password'),
]);