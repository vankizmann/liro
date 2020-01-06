<?php

namespace Liro\Web\Traits;

trait LocalesTrait
{
    protected $locale = null;
    protected $locales = null;

    public function setLocale($locale)
    {
        $this->locale = $locale;
    }

    public function getLocale()
    {
        return $this->locale ?: config('app.locale');
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
