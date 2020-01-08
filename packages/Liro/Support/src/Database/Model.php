<?php

namespace Liro\Support\Database;

use Illuminate\Database\Eloquent\Model as BaseModel;

class Model extends BaseModel
{
    use Traits\Castable, Traits\Paginatable, Traits\Datatable;

    /**
     * The "type" of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'uuid';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    public function forceSetAttribute($key, $value) {
        static::unguarded(function () use ($key, $value) {
            $this->setAttribute($key, $value);
        });
    }


    public function fill($attributes)
    {
        if ( empty($this->attributes['id']) && ! empty($attributes['id']) ) {
            $this->forceSetAttribute('id', $attributes['id']);
        }

        return parent::fill($attributes);
    }

}
