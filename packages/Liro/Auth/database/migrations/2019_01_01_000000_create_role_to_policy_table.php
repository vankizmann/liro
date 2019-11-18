<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoleToPolicyTable extends Migration
{
    public function up()
    {
        Schema::create('role_to_policy', function(Blueprint $table) {

            $table->integer('role_id')
                ->default(0);

            $table->integer('policy_id')
                ->default(0);

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('role_to_policy');
    }

}
