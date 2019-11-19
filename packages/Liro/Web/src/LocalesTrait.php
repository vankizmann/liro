<?php

namespace Liro\Web;

trait LocalesTrait
{
    protected $locale;
    protected $locales;

    public function setLocale($locale)
    {
        $this->locale = $locale;
    }

    public function getLocale()
    {
        return $this->locale ?: $this->app['config']['app.locale'];
    }

    public function setLocales($locales)
    {
        $this->locales = $locales;
    }

    public function getLocales()
    {
        return $this->locales ?: [$this->getLocale()];
    }


}
