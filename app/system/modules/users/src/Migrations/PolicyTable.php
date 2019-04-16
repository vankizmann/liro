<?php

namespace  Liro\Extension\Users\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PolicyTable extends Migration
{
    public function install()
    {
        Schema::create('policies', function(Blueprint $table) {

            $table->increments('id');

            $table->string('title')
                ->default('');

            $table->string('class')
                ->default('')->nullable();

            $table->string('method')
                ->default('')->nullable();

            $table->string('module')
                ->default('')->nullable();

            $table->integer('depth')
                ->default(0)->nullable();

            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('policies');
    }

}
