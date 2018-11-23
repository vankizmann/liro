<?php

namespace Liro\System\Users\Tables;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserRoleRouteTable extends Migration
{
    public function install()
    {
        Schema::create('user_role_routes', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('user_role_id')
                ->default(0);

            $table->string('route')
                ->default('');

            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('user_role_routes');
    }

}
