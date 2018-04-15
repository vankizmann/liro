 <?php

 use Kalnoy\Nestedset\NestedSet;

if ( $schema->hasTable('menus') ) {
    return;
}

$schema->create('menu_groups', function ($table) {
    $table->increments('id');
    $table->string('title');
    $table->string('lang');
    $table->timestamps();
});

$schema->create('menu_menus', function ($table) {
    $table->increments('id');
    $table->integer('lock');
    $table->integer('state');
    $table->string('title');
    $table->string('route');
    $table->string('query');
    $table->string('package');
    $table->integer('group_id');
    $table->timestamps();
    NestedSet::columns($table);
});

$db->table('menu_groups')->insert([
    'title'         => 'Admin Menu',
    'lang'          => 'en'
]);

$db->table('menu_groups')->insert([
    'title'         => 'Main Menu',
    'lang'          => 'en'
]);

$db->table('menu_menus')->insert([
    'state'         => 1,
    'lang'          => '*',
    'title'         => '*.cms.home',
    'route'         => '/',
    'query'         => 'index',
    'package'       => 'liro/users',
    'group_id'      => 1
]);

$db->table('menu_menus')->insert([
    'state'         => 1,
    'lang'          => 'en',
    'title'         => 'Home',
    'route'         => '/',
    'query'         => 'index',
    'package'       => 'liro/pages',
    'group_id'      => 2
]);