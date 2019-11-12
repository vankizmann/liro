<?php

namespace Liro\Module\Database;

use Liro\Support\Database\ModelPrototype;
use Liro\Support\Database\Traits\State;

class Module extends ModelPrototype
{
    use State;

    protected $table = 'modules';

    protected $guarded = [
        'id',
    ];

    protected $attributes = [
        'state'     => null,
        'extension' => null,
        'guard'     => null,
    ];

    protected $casts = [
        'state'     => 'integer',
        'extension' => 'string',
        'guard'     => 'integer',
    ];

}
