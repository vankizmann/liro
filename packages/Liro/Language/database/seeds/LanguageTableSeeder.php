<?php

use Illuminate\Database\Seeder;
use App\Database\Language;
use App\Database\LanguageLocale;

class LanguageTableSeeder extends Seeder
{

    public function run()
    {
        Language::create([
            'id'        => $tmp = uuid(),
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'English',
            'locale'    => 'en'
        ]);

        LanguageLocale::create([
            'id'            => uuid(),
            'foreign_id'    => $tmp,
            'locale'        => 'de',
            'title'         => 'Englisch'
        ]);

        Language::create([
            'id'        => $tmp = uuid(),
            'state'     => 1,
            'hide'      => 0,
            'title'     => 'German',
            'locale'    => 'de'
        ]);

        LanguageLocale::create([
            'id'            => uuid(),
            'foreign_id'    => $tmp,
            'locale'        => 'de',
            'title'         => 'Deutsch'
        ]);

        Language::create([
            'id'        => $tmp = uuid(),
            'state'     => 1,
            'hide'      => 1,
            'title'     => 'Danish',
            'locale'    => 'da'
        ]);

        LanguageLocale::create([
            'id'            => uuid(),
            'foreign_id'    => $tmp,
            'locale'        => 'de',
            'title'         => 'Dänisch'
        ]);

        Language::create([
            'id'        => $tmp = uuid(),
            'state'     => 1,
            'hide'      => 1,
            'title'     => 'Russian',
            'locale'    => 'ru'
        ]);

        LanguageLocale::create([
            'id'            => uuid(),
            'foreign_id'    => $tmp,
            'locale'        => 'de',
            'title'         => 'Russisch'
        ]);
    }

}
