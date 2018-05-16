<?php

namespace Liro\System\Services;

class Translator extends \Illuminate\Translation\Translator
{

    /**
     * Get the translation for a given key.
     *
     * @param  string  $key
     * @param  array   $replace
     * @param  string  $locale
     * @return string|array|null
     */
    public function trans($key, array $replace = [], $locale = null)
    {
        if ( $this->has("*.{$key}") ) {
            return $this->get("*.{$key}", $replace, $locale);
        }

        return $this->get($key, $replace, $locale);
    }

}
