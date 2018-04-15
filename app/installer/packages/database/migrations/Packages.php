<?php

if ( $schema->hasTable('packages') ) {
    return;
}

$schema->create('packages', function ($table) {
    $table->increments('id');
    $table->integer('state');
    $table->integer('hidden');
    $table->string('index');
    $table->timestamps();
});