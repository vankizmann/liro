<?php

namespace Liro\System\Modules\Tables;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Liro\System\Modules\Models\Module;

class ModuleTable extends Migration
{
    public function install()
    {
        Schema::create('modules', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('state')
                ->default(0);

            $table->integer('hide')
                ->default(0);

            $table->integer('lock')
                ->default(0);

            $table->string('module')
                ->default('');

            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('modules');
    }

}
