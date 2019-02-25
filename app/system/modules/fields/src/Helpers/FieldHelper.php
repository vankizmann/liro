<?php

namespace Liro\Extension\Fields\Helpers;

use Liro\Extension\Fields\Models\Field;

class FieldHelper
{
    protected static $fields;

    public static function get($label, $default = null)
    {
        $field = Field::where('label', $label)->first();

        return $field ? $field->value : $default;
    }

    public static function set($label, $value)
    {
        Field::where('label', $label)->updateOrCreate([
            'label' => $label, 'value' => $value
        ]);

        return $value;
    }

    public static function getModel($model, $label, $default = null)
    {
        if ( ! @$model->id ) {
            return $default;
        }

        return self::get("{$model->getTable()}.{$model->id}.{$label}", $default);
    }

    public static function setModel($model, $label, $value)
    {
        $model->saved(function () use ($model, $label, $value) {
            self::set("{$model->getTable()}.{$model->id}.{$label}", $value);
        });

        return $value;
    }

}
