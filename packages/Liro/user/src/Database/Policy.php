<?php

namespace Liro\User\Database;

use Liro\Support\Database\Model;

class Policy extends Model
{
    protected $table = 'policies';

    protected $guarded = [
        'uuid',
    ];

    protected $attributes = [
        'uuid'   => null,
        'title'  => null,
        'class'  => null,
        'method' => null,
        'depth'  => null,
    ];

    protected $casts = [
        'uuid'   => 'uuid',
        'title'  => 'string',
        'class'  => 'string',
        'method' => 'string',
        'depth'  => 'integer',
    ];

}
