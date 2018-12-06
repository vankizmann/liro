<?php

namespace Liro\System\Database;

trait CastableTrait
{
    /**
     * Cast an attribute to a native PHP type.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return mixed
     */
    protected function castAttribute($key, $value)
    {
        if ( $this->getCastType($key) == 'array' && is_null($value) ) {
            return [];
        }

        if ( $this->getCastType($key) == 'string' && is_null($value) ) {
            return '';
        }

        if ( $this->getCastType($key) == 'integer' && is_null($value) ) {
            return 0;
        }

        return parent::castAttribute($key, $value);
    }

}
