<?php

namespace Liro\System\Fields\Traits;

use Liro\System\Fields\Helpers\FieldHelper;

trait FieldTrait
{
    // public function getAttributes()
    // {
    //     return array_filter(parent::getAttributes(), function ($key) {
    //         return in_array($key, $this->getTableColumns());
    //     }, ARRAY_FILTER_USE_KEY);
    // }

    public function getFillable()
    {
        return array_merge($this->getFields(), $this->fillable);
    }

    public function getFields()
    {
        return isset($this->fields) ? $this->fields : [];
    }

    public function setAttribute($key, $value)
    {
        if ( in_array($key, $this->getFields()) && ! $this->hasSetMutator($key) ) {
            return FieldHelper::setModel($this, $key, $value);
        }

        return parent::setAttribute($key, $value);
    }

    public function getAttribute($key)
    {
        if ( in_array($key, $this->getFields()) && ! $this->hasGetMutator($key) ) {
            return FieldHelper::getModel($this, $key, null);
        }

        return parent::getAttribute($key);
    }

}