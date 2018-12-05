<?php

namespace Liro\System\Fields\Traits;

use Liro\System\Fields\Helpers\FieldHelper;

trait FieldTrait
{
    protected $columns;

    // public function __construct()
    // {
    //     $this->columns = $this->getConnection()->getSchemaBuilder()->getColumnListing($this->table);
    // }

    // public function getAttributes()
    // {
    //     return array_filter(parent::getAttributes(), function ($key) {
    //         return in_array($key, $this->getTableColumns());
    //     }, ARRAY_FILTER_USE_KEY);
    // }

    // public function setAttribute($key, $value)
    // {
    //     if ( ! in_array($key, $this->getTableColumns()) && ! $this->hasSetMutator($key) ) {
    //         return FieldHelper::setModel($this, $key, $value);
    //     }

    //     return parent::setAttribute($key, $value);
    // }

    // public function getAttribute($key)
    // {
    //     if ( ! array_key_exists($key, $this->attributes) && ! $this->hasGetMutator($key) && ! method_exists(self::class, $key) ) {
    //         return FieldHelper::getModel($this, $key);
    //     }

    //     return parent::getAttribute($key);
    // }

}