<?php

namespace Liro\Extension\Users\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserToRoleTable extends Migration
{
    public function install()
    {
        Schema::create('user_to_role', function(Blueprint $table) {

            $table->integer('user_id')
                ->default(0);

            $table->integer('role_id')
                ->default(0);

            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('user_to_role');
    }

}
