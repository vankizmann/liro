<?php

namespace Liro\Language\Database;

use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\Translatable;

class Translation extends Model
{
    use Translatable;

    protected $table = 'translations';

    protected $guarded = [
        'id'
    ];

    protected $localized = [
        'target'
    ];

    protected $attributes = [
        'id'            => null,
        'source'        => null,
        'target'        => null
    ];

    protected $casts = [
        'id'            => 'uuid',
        'source'        => 'string',
        'target'        => 'string'
    ];

}
