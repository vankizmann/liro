<?php

namespace Liro\System\Users\Tables;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserTable extends Migration
{
    public function install()
    {
        Schema::create('users', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('state')
                ->default(0);

            $table->integer('lock')
                ->default(0);

            $table->string('name')
                ->default('');

            $table->string('email')
                ->unique();

            $table->string('password')
                ->default('');
            
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('users');
    }

}
