<?php

namespace App\Factory\Language\Listeners;

use Illuminate\Foundation\Application;

class ApplicationListener
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle()
    {
        $this->app->singleton('liro.language', function($app) {
            return $app->make('App\Factory\Language\LanguageFactory');
        });

        $language = $this->app->get('liro.language');

        $this->app->call([$language, 'getLocale']);
        $this->app->call([$language, 'setLocaleInApplication']);
        $this->app->call([$language, 'setLocaleInTranslator']);
        $this->app->call([$language, 'setLocaleInUrl']);
        $this->app->call([$language, 'setLocaleInView']);
    }

}

