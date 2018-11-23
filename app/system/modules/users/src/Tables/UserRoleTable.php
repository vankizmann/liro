<?php

namespace Liro\System\Users\Tables;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserRoleTable extends Migration
{
    public function install()
    {
        Schema::create('user_roles', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('lock')
                ->default(0);

            $table->string('title')
                ->default('');
            
            $table->string('description')
                ->nullable();
            
            $table->string('access')
                ->unique();

            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('user_roles');
    }

}
