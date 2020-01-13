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
     * Base locale.
     *
     * @var string
     */
    public $baseLocale = 'en';

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
        $this->baseLocale = config('app.locale');

        /* @var \Illuminate\Support\Collection $locales */
        $this->locales = Language::enabled()->orderBy('locale')
            ->pluck('locale')->toArray();

        // Set base language
        $this->locale = reset($this->locales);

        // Get http language
        $http = @$_SERVER['HTTP_ACCEPT_LANGUAGE'] ?: '';

        preg_match_all('/((?<=,)[a-z]{2}(?=;)|^[a-z]{2}(?=-|,))/',
            $http, $accepted, PREG_PATTERN_ORDER);

        $accepted = array_filter(reset($accepted));

        if ( $locale = collect($this->locales)->intersect($accepted)->last() ) {
            $this->locale = $locale;
        }

        $segments = request()->segments();

        if ( $locale = collect($this->locales)->intersect($segments)->first() ) {
            $this->locale = $locale;
        }

        if ( app()->runningInConsole() ) {
            $this->locale = config('app.locale');
        }

        $this->app->setLocale($this->locale);

        $this->app['events']->listen('web.language: setLocale', function ($locale) {
            $this->app->setLocale($locale);
        });

        $this->app['events']->dispatch('web.language: booted', $this->app);
    }

    public function setBaseLocale($locale)
    {
        $this->app['events']->dispatch('web.language: setBaseLocale',
            $this->baseLocale = $locale);
    }

    public function getBaseLocale()
    {
        return $this->baseLocale;
    }

    public function isBaseLocale()
    {
        return $this->baseLocale === $this->locale;
    }

    public function getLocale()
    {
        return $this->locale;
    }

    public function setLocale($locale)
    {
        $this->app['events']->dispatch('web.language: setLocale',
            $this->locale = $locale);
    }

    public function getLocales()
    {
        return $this->locales;
    }

    public function setLocales($locales)
    {
        $this->app['events']->dispatch('web.language: setLocales',
            $this->locales = $locales);
    }

}
