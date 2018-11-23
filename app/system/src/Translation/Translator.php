<?php

namespace Liro\System\Translation;

use Illuminate\Support\Arr;

class Translator extends \Illuminate\Translation\Translator
{

    public function getLoaded()
    {
        return $this->loaded;
    }

    public function getLinesFlatten($key, $locale = null)
    {
        if ( $locale == null ) {
            $locale = $this->locale;
        }
        
        list($namespace, $group) = $this->parseKey($key);

        if ( ! $this->isLoaded($namespace, $group, $locale) ) {
            $this->load($namespace, $group, $locale);
        }

        return ["$namespace::$group" => $this->loaded[$namespace][$group][$locale]];
    }

}
