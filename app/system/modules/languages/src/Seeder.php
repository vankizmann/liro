<?php

namespace Liro\System\Languages;

use Liro\System\Languages\Models\Language;

class Seeder
{

    public function install()
    {
        $language_en = Language::create([
            'state'     => 1,
            'default'   => 0,
            'title'     => 'English',
            'locale'    => 'en'
        ]);

        $language_de = Language::create([
            'state'     => 1,
            'default'   => 1,
            'title'     => 'Deutsch',
            'locale'    => 'de'
        ]);
    }

}