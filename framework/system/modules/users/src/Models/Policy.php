<?php

namespace Liro\Extension\Users\Models;

use Liro\System\Database\Model;

class Policy extends Model
{
    protected $table = 'policies';

    protected $guarded = [
        'id',
    ];

    protected $attributes = [
        'title'  => null,
        'class'  => null,
        'method' => null,
        'depth'  => null,
    ];

    protected $casts = [
        'title'  => 'string',
        'class'  => 'string',
        'method' => 'string',
        'depth'  => 'integer',
    ];

}
