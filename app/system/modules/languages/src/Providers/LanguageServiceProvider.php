<?php

namespace Liro\Extension\Languages\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use Liro\Extension\Languages\Models\Language;

class LanguageServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Load any application services.
     *
     * @return void
     */
    public function load()
    {
        /* @var \Illuminate\Support\Collection $locales */
        $locales = Language::enabled()->pluck('locale');

        // Get http language
        $http = @$_SERVER['HTTP_ACCEPT_LANGUAGE'] ?: '';

        preg_match('/(?<=,)[a-z]+(?=;)/', $http, $accepted);

        if ( $locale = $locales->intersect($accepted)->first() ) {
            $this->app->setLocale($locale);
        }

        $segments = request()->segments();

        if ( $locale = $locales->intersect($segments)->first() ) {
            $this->app->setLocale($locale);
        }

        $this->app->setLocales($locales->toArray());
    }

}
