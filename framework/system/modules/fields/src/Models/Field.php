<?php

namespace Liro\Extension\Fields\Models;

use Liro\System\Database\Model;

class Field extends Model
{
    protected $table = 'fields';

    protected $guarded = [
        'id'
    ];

    protected $attributes = [
        'label'         => null,
        'value'         => null
    ];

    protected $casts = [
        'label'         => 'string',
        'value'         => 'string'
    ];

}
