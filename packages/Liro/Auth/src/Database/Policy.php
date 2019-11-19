<?php

namespace Liro\Auth\Database;

use Liro\Support\Database\ModelPrototype;

class Policy extends ModelPrototype
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
        'uuid'   => 'string',
        'title'  => 'string',
        'class'  => 'string',
        'method' => 'string',
        'depth'  => 'integer',
    ];

}
