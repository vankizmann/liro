<?php

namespace Liro\Module\Database;

use Liro\Support\Database\Model;
use Liro\Support\Database\Traits\State;

class Module extends Model
{
    use State;

    protected $table = 'modules';

    protected $guarded = [
        'id',
    ];

    protected $attributes = [
        'id'        => null,
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
