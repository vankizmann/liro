<?php

namespace Liro\Language\Database;

use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\Hide;
use Liro\Support\Database\Traits\State;
use Liro\Support\Database\Traits\Translatable;

class Language extends Model
{
    use State, Hide, Translatable;

    protected $table = 'languages';

    protected $guarded = [
        'id'
    ];

    protected $localized = [
        'title'
    ];

    protected $attributes = [
        'id'            => null,
        'state'         => null,
        'hide'          => null,
        'title'         => null,
        'locale'        => null
    ];

    protected $casts = [
        'id'            => 'uuid',
        'state'         => 'integer',
        'hide'          => 'integer',
        'title'         => 'string',
        'locale'        => 'string'
    ];

}
