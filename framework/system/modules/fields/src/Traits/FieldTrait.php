<?php

namespace Liro\Extension\Fields\Traits;

use Liro\Extension\Fields\Helpers\FieldHelper;

trait FieldTrait
{
    public function toArray()
    {
        return array_merge($this->attributesToArray(),
            $this->relationsToArray(), $this->fieldsToArray());
    }

    public function fieldsToArray()
    {
        $result = [];

        foreach ( $this->getFields() as $field ) {
            $result[$field] = $this->getAttribute($field);
        }

        return $result;
    }

     public function getAttributes()
     {
         return array_filter($this->attributes, function ($key) {
             return ! in_array($key, $this->getFields());
         }, ARRAY_FILTER_USE_KEY);
     }

    public function getFillable()
    {
        if ( empty($this->fillable) ) {
            return parent::getFillable();
        }

        return array_merge($this->getFields(), $this->fillable);
    }

    public function getFields()
    {
        return isset($this->fields) ? $this->fields : [];
    }

    public function setAttribute($key, $value)
    {
        if ( in_array($key, $this->getFields()) && ! $this->hasSetMutator($key) ) {
            return FieldHelper::setModel($this, $key, $this->setCastAttribute($key, $value));
        }

        return parent::setAttribute($key, $value);
    }

    public function getAttribute($key)
    {
        if ( in_array($key, $this->getFields()) && ! $this->hasGetMutator($key) ) {
            return $this->castAttribute($key, FieldHelper::getModel($this, $key, null));
        }

        return parent::getAttribute($key);
    }

}
