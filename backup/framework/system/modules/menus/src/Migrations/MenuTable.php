<?php

namespace Liro\Extension\Menus\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MenuTable extends Migration
{
    public function install()
    {
        Schema::create('menus', function(Blueprint $table) {

            $table->increments('id');

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
            $table->nestedSet();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('menus');
    }

}
