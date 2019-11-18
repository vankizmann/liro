<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenuTable extends Migration
{
    public function up()
    {
        Schema::create('menus', function(Blueprint $table) {

            $table->uuid('id');

            $table->integer('state')
                ->default(0);

            $table->integer('hide')
                ->default(0);

            $table->string('title')
                ->default('');

            $table->string('slug')
                ->nullable();

            $table->string('module')
                ->nullable();

            $table->string('query')
                ->nullable();

            $table->string('layout')
                ->nullable();

            $table->string('locale')
                ->nullable();

            $table->integer('guard')
                ->nullable();

            $table->integer('domain_id')
                ->default(0);

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('menus');
    }

}
