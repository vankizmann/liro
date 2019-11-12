<?php

namespace Liro\Support\Database\Traits;

trait State
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
