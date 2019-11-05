<?php

namespace Liro\Extension\Menus\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DomainTable extends Migration
{
    public function install()
    {
        Schema::create('domains', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('state')
                ->default(0);

            $table->string('title')
                ->default('');

            $table->string('route')
                ->nullable();

            $table->string('theme')
                ->default('');

            $table->integer('entry')
                ->nullable();

            $table->integer('guard')
                ->nullable();
                
            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('domains');
    }

}
