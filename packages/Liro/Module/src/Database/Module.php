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
        'uuid'      => null,
        'state'     => null,
        'package'   => null,
        'guard'     => null,
    ];

    protected $casts = [
        'id'        => 'uuid',
        'state'     => 'integer',
        'package'   => 'string',
        'guard'     => 'integer',
    ];

}
