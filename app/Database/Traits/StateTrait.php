<?php

namespace Liro\System\Database\Traits;

trait StateTrait
{
    public function scopeEnabled($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where('state', 1);
    }

    public function scopeDisabled($query)
    {
        /* @var \Illuminate\Database\Eloquent\Builder $query */
        return $query->where('state', 0);
    }

}
