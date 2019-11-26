<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenuTable extends Migration
{
    public function up()
    {
        Schema::create('menus', function(Blueprint $table) {

            $table->uuid('uuid')
                ->primary();

            $table->integer('state')
                ->default(0);

            $table->integer('hide')
                ->default(0);

            $table->string('type')
                ->nullable();

            $table->string('extend')
                ->nullable();

            $table->string('layout')
                ->nullable();

            $table->string('title')
                ->default('');

            $table->string('slug')
                ->nullable();

            $table->string('matrix')
                ->nullable();

            $table->integer('guard')
                ->nullable();

            $table->uuid('parent_id')
                ->nullable();

            $table->integer('left')
                ->nullable();

            $table->integer('right')
                ->nullable();

            $table->integer('depth')
                ->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('menus');
    }

}