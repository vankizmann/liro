<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLanguageTable extends Migration
{
    public function up()
    {
        Schema::create('languages', function(Blueprint $table) {

            $table->uuid('id')
                ->primary();

            $table->integer('state')
                ->default(0);

            $table->string('title')
                ->default('');

            $table->string('locale')
                ->default('');
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('languages');
    }

}
