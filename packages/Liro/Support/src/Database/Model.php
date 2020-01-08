<?php

namespace Liro\Support\Database;

use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Support\Collection;

class Model extends BaseModel
{
    use Traits\Castable, Traits\Paginatable, Traits\Datatable;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The "type" of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'uuid';

    /**
     * Relationship keys which are fillable.
     *
     * @var array
     */
    protected $relationships = [];

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

        foreach ( $attributes as $key => $value ) {

            if ( ! in_array($key, $this->relationships) ) {
                continue;
            }

            if ( is_a($value, self::class) ) {
                $this->load($key)->{$key}()->associate($value);
            }

            if ( is_a($value, Collection::class) ) {
                $this->load($key)->{$key}()->sync($value);
            }

            unset($attributes[$key]);
        }

        return parent::fill($attributes);
    }

}
