<?php

namespace Liro\System\Languages\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Language extends Model
{
    protected $table = 'languages';

    public function scopeEnabled()
    {
        return $this->where('state', 1);
    }

    public function scopeDisabled()
    {
        return $this->where('state', 0);
    }

    public function getActiveAttribute()
    {
        return isset($this->attributes['locale']) && $this->attributes['locale'] == app('request')->segment(1) ? 1 : 0;
    }
}
