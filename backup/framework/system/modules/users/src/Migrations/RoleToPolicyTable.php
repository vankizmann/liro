<?php

namespace Liro\Extension\Users\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RoleToPolicyTable extends Migration
{
    public function install()
    {
        Schema::create('role_to_policy', function(Blueprint $table) {

            $table->integer('role_id')
                ->default(0);

            $table->integer('policy_id')
                ->default(0);

            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('role_to_policy');
    }

}
