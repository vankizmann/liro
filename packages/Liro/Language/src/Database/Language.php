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
        'label'
    ];

    protected $attributes = [
        'id'            => null,
        'state'         => null,
        'hide'          => null,
        'label'         => null,
        'locale'        => null,
        'country'       => null
    ];

    protected $casts = [
        'id'            => 'uuid',
        'state'         => 'integer',
        'hide'          => 'integer',
        'label'         => 'string',
        'locale'        => 'string',
        'country'       => 'string'
    ];

}
