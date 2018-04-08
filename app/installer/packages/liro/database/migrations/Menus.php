 <?php

 use Kalnoy\Nestedset\NestedSet;

if ( $schema->hasTable('menus') ) {
    return;
}

$schema->create('menus', function ($table) {
    $table->increments('id');
    $table->integer('state');
    $table->string('lang');
    $table->string('name');
    $table->string('alias');
    $table->string('route');
    $table->timestamps();
    NestedSet::columns($table);
});