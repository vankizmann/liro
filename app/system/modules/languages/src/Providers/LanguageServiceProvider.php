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
        /* @var \Illuminate\Support\Collection $locales */
        $locales = Language::enabled()->pluck('locale');

        preg_match('/(?<=,)[a-z]+(?=;)/', $_SERVER['HTTP_ACCEPT_LANGUAGE'], $accepted);

        if ( $locale = $locales->intersect($accepted)->first() ) {
            $this->app->setLocale($locale);
        }

        $segments = request()->segments();

        if ( $locale = $locales->intersect($segments)->first() ) {
            $this->app->setLocale($locale);
        }

        $this->app->setAllowedLocales($locales->toArray());
    }

}