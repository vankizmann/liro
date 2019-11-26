<?php

namespace Liro\Language;

use App\Database\Language;

class LanguageManager
{
    /**
     * @var \Liro\Support\Application
     */
    protected $app;

    /**
     * Locale store.
     *
     * @var string
     */
    public $locale = 'en';

    /**
     * Locales store.
     *
     * @var array
     */
    public $locales = ['en'];

    /**
     * LanguageManager constructor.
     *
     * @param $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * Register menus and bind
     *
     * @return void
     */
    public function boot()
    {
        /* @var \Illuminate\Support\Collection $locales */
        $this->locales = Language::enabled()->orderBy('locale')
            ->pluck('locale')->toArray();

        // Get http language
        $http = @$_SERVER['HTTP_ACCEPT_LANGUAGE'] ?: '';

        preg_match('/(?<=,)[a-z]+(?=;)/', $http, $accepted);

        if ( $locale = collect($this->locales)->intersect($accepted)->first() ) {
            $this->locale = $locale;
        }

        $segments = request()->segments();

        if ( $locale = collect($this->locales)->intersect($segments)->first() ) {
            $this->locale = $locale;
        }

        $this->app->setLocale($this->locale);

        $this->app['events']->dispatch('web.language: booted', $this->app);
    }

    public function getLocale()
    {
        return $this->locale;
    }

    public function setLocale($locale)
    {
        $this->app['events']->dispatch('web.language: setLocale', $this->locale = $locale);
    }

    public function getLocales()
    {
        return $this->locales;
    }

    public function setLocales($locales)
    {
        $this->app['events']->dispatch('web.language: setLocales', $this->locales = $locales);
    }

}