<?php

namespace App\Factory\Services;

class Locale
{
    protected $app;
    protected $locale;
    protected $languages;

    public function __construct($app)
    {
        $this->app = $app;
    }

    public function boot()
    {
        $this->getLanguagesFromDb()->setLocaleFromRequest()->setLocaleFromDb()->setTranslatorLocale();
        $this->app->setLocale($this->locale);
        return $this;
    }

    public function getLanguagesFromDb()
    {
        $this->languages = $this->app['db']->table('languages')->where('state', 1)->get();
        return $this;
    }

    protected function setLocaleFromRequest()
    {
        $this->locale = $this->locale = $this->app['request']->segment(1);
        return $this;
    }

    protected function setLocaleFromDb()
    {
        $this->locale = ! $this->languages->where('locale', $this->locale)->count() ? $this->languages->where('default', 1)->pluck('locale')->first() : $this->locale;
        return $this;
    }

    public function removeLocaleFromRoute()
    {
        $this->app['request']->route()->forgetParameter('locale');
        return $this;
    }

    public function setViewLocale()
    {
        $this->app['view']->share('locale', $this->locale);
        return $this;
    }

    public function setUrlLocale()
    {
        $this->app['url']->defaults(['locale' => $this->locale]);
        return $this;
    }

    public function setTranslatorLocale()
    {
        $this->app['translator']->setLocale($this->locale);
        return $this;
    }
}