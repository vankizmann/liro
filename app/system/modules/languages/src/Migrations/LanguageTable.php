<?php

namespace Liro\Extension\Languages\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class LanguageTable extends Migration
{
    public function install()
    {
        Schema::create('languages', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('state')
                ->default(0);

            $table->string('title')
                ->default('');

            $table->string('locale')
                ->default('');
            
            $table->timestamps();
        });
    }

    public function uninstall()
    {
        Schema::dropIfExists('languages');
    }

}
