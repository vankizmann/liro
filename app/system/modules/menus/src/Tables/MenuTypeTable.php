<?php

namespace Liro\System\Menus\Tables;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MenuTypeTable extends Migration
{
    public function install()
    {
        Schema::create('menu_types', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('state')
                ->default(0);

            $table->integer('hide')
                ->default(0);
            
            $table->integer('lock')
                ->default(0);

            $table->string('locale')
                ->nullable();

            $table->string('title')
                ->default('');

            $table->string('route')
                ->nullable();

            $table->string('theme')
                ->default('');
                
            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('menu_types');
    }

}
