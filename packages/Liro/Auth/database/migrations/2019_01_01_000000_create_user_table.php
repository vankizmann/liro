<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    public function up()
    {
        Schema::create('users', function(Blueprint $table) {

            $table->uuid('id');

            $table->integer('state')
                ->default(0);

            $table->string('name')
                ->default('');

            $table->string('email')
                ->default('');

            $table->string('password')
                ->default('');

            $table->integer('guard')
                ->default(0);

            $table->timestamp('verified_at')
                ->nullable();

            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }

}
