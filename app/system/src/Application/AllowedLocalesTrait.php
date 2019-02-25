<?php

namespace Liro\System\Application;

trait AllowedLocalesTrait
{
    protected $allowedLocales;

    public function setAllowedLocales($locales)
    {
        $this->allowedLocales = $locales;
    }

    public function getAllowedLocales()
    {
        return $this->allowedLocales ?: [];
    }


}
