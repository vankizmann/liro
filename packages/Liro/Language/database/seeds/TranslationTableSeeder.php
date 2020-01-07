<?php

use Illuminate\Database\Seeder;
use App\Database\Translation;
use App\Database\TranslationLocale;

class TranslationTableSeeder extends Seeder
{

    public function run()
    {
        $filePath = resource_path('lang/de.json');

        if ( ! file_exists($filePath) ) {
            return;
        }

        $translations = json_decode(
            file_get_contents($filePath), JSON_OBJECT_AS_ARRAY
        );

        foreach( $translations as $source => $target ) {

            Translation::create([
                'id'        => $tmp = uuid(),
                'source'    => $source,
                'target'    => $source
            ]);

            TranslationLocale::create([
                'id'            => uuid(),
                'foreign_id'    => $tmp,
                'target'        => $target,
                'locale'        => 'de'
            ]);

        }

    }

}
