<?php

namespace Liro\Extension\Languages\Models;

use Liro\System\Database\Model;

class Language extends Model
{

    protected $table = 'languages';

    protected $guarded = [
        'id'
    ];

    protected $attributes = [
        'state'         => null,
        'title'         => null,
        'locale'        => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'title'         => 'string',
        'locale'        => 'string'
    ];

}
