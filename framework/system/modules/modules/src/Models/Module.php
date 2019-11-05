<?php

namespace Liro\Extension\Modules\Models;

use Liro\System\Database\Model;
use Liro\System\Database\Traits\StateTrait;

class Module extends Model
{
    use StateTrait;

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
