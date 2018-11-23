<?php

namespace Liro\System\Languages\Tables;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Liro\System\Languages\Models\Language;

class LanguageTable extends Migration
{
    public function install()
    {
        Schema::create('languages', function(Blueprint $table) {

            $table->increments('id');

            $table->integer('state')
                ->default(0);
            
            $table->integer('default')
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
