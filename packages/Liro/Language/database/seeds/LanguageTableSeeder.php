<?php

use Illuminate\Database\Seeder;
use App\Database\Language;

class LanguageTableSeeder extends Seeder
{

    public function run()
    {
        Language::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'title'     => 'English',
            'locale'    => 'en'
        ]);

        Language::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'title'     => 'German',
            'locale'    => 'de'
        ]);

        Language::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'title'     => 'Danish',
            'locale'    => 'da'
        ]);

        Language::create([
            'uuid'      => uuid(),
            'state'     => 1,
            'title'     => 'Russian',
            'locale'    => 'ru'
        ]);
    }

}
