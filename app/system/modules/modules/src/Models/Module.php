<?php

namespace Liro\System\Modules\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Database\CastableTrait;

class Module extends Model
{
    use CastableTrait;

    protected $table = 'modules';

    protected $fillable = [
        'state', 'hide', 'lock', 'module'
    ];

    protected $attributes = [
        'state'         => null,
        'hide'          => null,
        'lock'          => null,
        'module'        => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'hide'          => 'integer',
        'lock'          => 'integer',
        'module'        => 'string'
    ];

    public function scopeEnabled($query)
    {
        return $query->where('state', 1);
    }

    public function scopeDisabled($query)
    {
        return $query->where('state', 0);
    }

    public function scopeHidden($query)
    {
        return $query->where('hide', 1);
    }

    public function scopeVisible($query)
    {
        return $query->where('hide', 0);
    }

}
