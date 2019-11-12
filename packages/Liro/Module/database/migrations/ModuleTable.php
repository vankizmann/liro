<?php

namespace  Liro\Extension\Modules\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModuleTable extends Migration
{
    public function up()
    {
        Schema::create('modules', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('state')
                ->default(0);

            $table->string('extension')
                ->default('');

            $table->integer('guard')
                ->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('modules');
    }

}
