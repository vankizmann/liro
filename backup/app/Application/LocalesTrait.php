<?php

namespace Liro\System\Application;

trait LocalesTrait
{
    protected $locales;

    public function setLocales($locales)
    {
        $this->locales = $locales;
    }

    public function getLocales()
    {
        return $this->locales ?: [];
    }


}
