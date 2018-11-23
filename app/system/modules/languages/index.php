<?php

use Illuminate\Foundation\Application;
use Liro\System\Languages\Models\Language;

return [

    'name'          => 'system-languages',
    'version'       => '0.0.1',
    'type'          => 'system-module',

    'autoload' => [
        'Liro\\System\\Languages\\' => 'src/'
    ],

    'alias' => [
        'languages' => Liro\System\Languages\Managers\LanguageManager::class
    ],

    'boot' => function(Application $app) {

        $locales = Language::enabled()->get();

        if ( $route = $locales->where('locale', $app['request']->segment(1))->first() ) {
            return $app->setLocale($route->locale);
        }

        if ( $default = $locales->where('default', 1)->first() ) {
            return $app->setLocale($default->locale);
        }

        throw new Exception('Missing default entry in languages table.');
    }

];
