 <?php

 use Kalnoy\Nestedset\NestedSet;

if ( $schema->hasTable('menus') ) {
    return;
}

$schema->create('menus', function ($table) {
    $table->increments('id');
    $table->integer('state');
    $table->string('lang');
    $table->string('title');
    $table->string('route');
    $table->string('name');
    $table->string('package');
    $table->string('type');
    $table->timestamps();
    NestedSet::columns($table);
});

$db->table('menus')->insert([
    'state'         => 1,
    'lang'          => 'en',
    'title'         => 'Home',
    'route'         => '/',
    'name'          => 'home.',
    'package'       => 'liro/menu',
    'type'          => 'backend'
]);

$db->table('menus')->insert([
    'state'         => 1,
    'lang'          => 'en',
    'title'         => 'Menus',
    'route'         => 'menus',
    'name'          => 'menus.',
    'package'       => 'liro/menu',
    'type'          => 'backend'
]);

$db->table('menus')->insert([
    'state'         => 1,
    'lang'          => 'en',
    'title'         => 'Languages',
    'route'         => 'languages',
    'name'          => 'languages.',
    'package'       => 'liro/language',
    'type'          => 'backend'
]);

$db->table('menus')->insert([
    'state'         => 1,
    'lang'          => 'en',
    'title'         => 'Users',
    'route'         => 'users',
    'name'          => 'users.',
    'package'       => 'liro/user',
    'type'          => 'backend'
]);