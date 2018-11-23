<?php

namespace Liro\System\Fields\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Database\Castable;

class Field extends Model
{
    use Castable;

    protected $table = 'fields';

    protected $fillable = [
        'label', 'value'
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
