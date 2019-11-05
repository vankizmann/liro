<?php

namespace Liro\Extension\Languages\Models;

use Liro\System\Database\Model;
use Liro\System\Database\Traits\StateTrait;

class Language extends Model
{
    use StateTrait;

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
