<?php

namespace Liro\Extension\Users\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RoleTable extends Migration
{
    public function install()
    {
        Schema::create('roles', function(Blueprint $table) {

            $table->increments('id');

            $table->string('title')
                ->default('');

            $table->string('description')
                ->default('');

            $table->string('access')
                ->default('');

            $table->integer('guard')
                ->default(0);

            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('roles');
    }

}
