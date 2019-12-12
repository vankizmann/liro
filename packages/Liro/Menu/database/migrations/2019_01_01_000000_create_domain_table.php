<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDomainTable extends Migration
{
    public function up()
    {
        Schema::create('domains', function(Blueprint $table) {

            $table->uuid('id')
                ->primary();

            $table->integer('state')
                ->default(0);

            $table->string('title')
                ->default('');

            $table->string('route')
                ->nullable();

            $table->string('theme')
                ->default('');

            $table->integer('entry')
                ->nullable();

            $table->integer('guard')
                ->nullable();
                
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('domains');
    }

}
