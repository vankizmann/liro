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
            'label'     => 'English',
            'locale'    => 'en',
            'country'   => 'gb'
        ]);

        LanguageLocale::create([
            'id'            => uuid(),
            'foreign_id'    => $tmp,
            'locale'        => 'de',
            'label'         => 'Englisch'
        ]);

        Language::create([
            'id'        => $tmp = uuid(),
            'state'     => 1,
            'hide'      => 0,
            'label'     => 'German',
            'locale'    => 'de',
            'country'   => 'de'
        ]);

        LanguageLocale::create([
            'id'            => uuid(),
            'foreign_id'    => $tmp,
            'locale'        => 'de',
            'label'         => 'Deutsch'
        ]);

        Language::create([
            'id'        => $tmp = uuid(),
            'state'     => 1,
            'hide'      => 1,
            'label'     => 'Danish',
            'locale'    => 'da',
            'country'   => 'dk'
        ]);

        LanguageLocale::create([
            'id'            => uuid(),
            'foreign_id'    => $tmp,
            'locale'        => 'de',
            'label'         => 'Dänisch'
        ]);

        Language::create([
            'id'        => $tmp = uuid(),
            'state'     => 1,
            'hide'      => 1,
            'label'     => 'Russian',
            'locale'    => 'ru',
            'country'   => 'ru'
        ]);

        LanguageLocale::create([
            'id'            => uuid(),
            'foreign_id'    => $tmp,
            'locale'        => 'de',
            'label'         => 'Russisch'
        ]);
    }

}
