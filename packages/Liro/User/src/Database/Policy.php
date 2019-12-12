<?php

namespace Liro\User\Database;

use Liro\Support\Database\Model;

class Policy extends Model
{
    protected $table = 'policies';

    protected $guarded = [
        'id',
    ];

    protected $attributes = [
        'id'     => null,
        'title'  => null,
        'class'  => null,
        'method' => null,
        'depth'  => null,
    ];

    protected $casts = [
        'id'     => 'uuid',
        'title'  => 'string',
        'class'  => 'string',
        'method' => 'string',
        'depth'  => 'integer',
    ];

}
