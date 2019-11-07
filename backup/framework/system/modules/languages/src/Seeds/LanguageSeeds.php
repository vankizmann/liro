<?php

namespace Liro\Extension\Languages\Seeds;

use Liro\Extension\Languages\Models\Language;

class LanguageSeeds
{

    public function install()
    {
        Language::create([
            'state'     => 1,
            'title'     => 'English',
            'locale'    => 'en'
        ]);

        Language::create([
            'state'     => 1,
            'title'     => 'Deutsch',
            'locale'    => 'de'
        ]);
    }

}
