<?php

namespace Liro\System\Fields\Tables;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Liro\System\Fields\Helpers\FieldHelper;

class FieldTable extends Migration
{
    public function install()
    {
        Schema::create('fields', function(Blueprint $table) {

            $table->increments('id');

            $table->string('label')
                ->default('');

            $table->string('value')
                ->default('');
            
            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('fields');
    }

}
