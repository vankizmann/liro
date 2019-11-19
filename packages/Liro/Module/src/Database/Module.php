<?php

namespace Liro\Module\Database;

use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\State;

class Module extends Model
{
    use State;

    protected $table = 'modules';

    protected $guarded = [
        'uuid',
    ];

    protected $attributes = [
        'uuid'      => null,
        'state'     => null,
        'package'   => null,
        'guard'     => null,
    ];

    protected $casts = [
        'uuid'      => 'uuid',
        'state'     => 'integer',
        'package'   => 'string',
        'guard'     => 'integer',
    ];

}
