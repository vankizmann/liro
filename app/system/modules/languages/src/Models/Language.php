<?php

namespace Liro\System\Languages\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Database\CastableTrait;

class Language extends Model
{
    use CastableTrait;

    protected $table = 'languages';

    protected $fillable = [
        'state', 'default', 'title', 'locale'
    ];

    protected $attributes = [
        'state'         => null,
        'default'       => null,
        'title'         => null,
        'locale'        => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'default'       => 'integer',
        'title'         => 'string',
        'locale'        => 'string'
    ];

    public function scopeEnabled()
    {
        return $this->where('state', 1);
    }

    public function scopeDisabled()
    {
        return $this->where('state', 0);
    }

}
