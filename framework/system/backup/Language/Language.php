<?php

namespace Liro\System\Language;

use Illuminate\Contracts\Foundation\Application;

class Language
{
    protected $app;

    protected $database;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function load()
    {
        $this->getLanguagesFromDb();
        $this->getLocaleFromDb();
        $this->getLocaleFromRequest();
        $this->getLocaleFromRoute();

        $this->app->get('events')->fire('liro.language.load');
    }

    public function getLanguagesFromDb()
    {
        $this->database = $this->app->get('db')->table('languages')->where('state', 1)->get();
    }

    public function getLocaleFromDb()
    {
        $locale = $this->database->where('default', 1)->pluck('locale')->first();

        if ( ! $locale ) {
            return;
        }

        $this->app->get('liro.factory')->setLocale($locale);
    }

    public function getLocaleFromRequest()
    {
        $locale = substr($this->app->get('request')->server('HTTP_ACCEPT_LANGUAGE'), 0, 2);

        if ( ! $locale || ! $this->database->where('locale', $locale)->count() ) {
            return;
        }

        $this->app->get('liro.factory')->setLocale($locale);
    }

    public function getLocaleFromRoute()
    {
        $locale = $this->app->get('request')->segment(1);
        
        if ( ! $locale || ! $this->database->where('locale', $locale)->count() ) {
            return;
        }

        $this->app->get('liro.factory')->setLocale($locale);
    }

}
