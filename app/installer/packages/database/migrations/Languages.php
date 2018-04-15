 <?php

if ( $schema->hasTable('languages') ) {
    return;
}

$schema->create('languages', function ($table) {
    $table->increments('id');
    $table->integer('state');
    $table->integer('default');
    $table->string('name');
    $table->string('locale');
    $table->timestamps();
});

$db->table('languages')->insert([
    'state'         => 1,
    'default'       => 1,
    'name'          => 'Deutsch',
    'locale'        => 'de'
]);

$db->table('languages')->insert([
    'state'         => 1,
    'default'       => 0,
    'name'          => 'English',
    'locale'        => 'en'
]);

$db->table('languages')->insert([
    'state'         => 0,
    'default'       => 0,
    'name'          => 'русский',
    'locale'        => 'ru'
]);