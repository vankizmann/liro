<?php

namespace Liro\Language\Database;

use Liro\Support\Database\Model;

class Translation extends Model
{

    protected $table = 'translations';

    protected $guarded = [
        'id'
    ];

    protected $attributes = [
        'id'            => null,
        'source'        => null,
        'locale'        => null
    ];

    protected $casts = [
        'id'            => 'uuid',
        'source'        => 'string',
        'target'        => 'string',
        'locale'        => 'string'
    ];



}
