<?php

namespace Liro\Language\Database;

use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\State;

class Language extends Model
{
    use State;

    protected $table = 'languages';

    protected $guarded = [
        'id'
    ];

    protected $attributes = [
        'id'            => null,
        'state'         => null,
        'title'         => null,
        'locale'        => null
    ];

    protected $casts = [
        'id'            => 'uuid',
        'state'         => 'integer',
        'title'         => 'string',
        'locale'        => 'string'
    ];

}
