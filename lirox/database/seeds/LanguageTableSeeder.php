<?php

use Illuminate\Database\Seeder;

class LanguageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->insert([
            'state'         => 0,
            'default'       => 0,
            'name'          => 'Deutsch',
            'locale'        => 'de'
        ]);

        DB::table('languages')->insert([
            'state'         => 1,
            'default'       => 0,
            'name'          => 'English',
            'locale'        => 'en'
        ]);

        DB::table('languages')->insert([
            'state'         => 1,
            'default'       => 1,
            'name'          => 'русский',
            'locale'        => 'ru'
        ]);
    }
}
