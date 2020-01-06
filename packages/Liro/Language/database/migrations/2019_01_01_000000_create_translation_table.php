<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTranslationTable extends Migration
{
    public function up()
    {
        Schema::create('translations', function(Blueprint $table) {

            $table->uuid('id')
                ->primary();

            $table->string('source')
                ->default('');

            $table->string('target')
                ->default('');

            $table->string('locale')
                ->default('');
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('translations');
    }

}
