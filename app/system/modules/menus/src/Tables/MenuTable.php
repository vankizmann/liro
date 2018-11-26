<?php

namespace Liro\System\Menus\Tables;

use Kalnoy\Nestedset\NestedSet;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Liro\System\Menus\Models\Menu;
use Liro\System\Menus\Models\MenuType;

class MenuTable extends Migration
{
    public function install()
    {
        Schema::create('menus', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('state')
                ->default(0);

            $table->integer('hide')
                ->default(0);

            $table->integer('lock')
                ->default(0);

            $table->string('title')
                ->default('');

            $table->string('route')
                ->nullable();

            $table->string('module')
                ->nullable();

            $table->string('query')
                ->nullable();

            $table->integer('default')
                ->default(0);

            $table->integer('menu_type_id')
                ->default(0);

            $table->timestamps();
            $table->nestedSet();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('menus');
    }

}
