<?php

namespace Liro\System\Database\Traits;

use Illuminate\Support\Facades\Input;

trait DatatableTrait
{

    public function scopeDatatable($query)
    {
        $query->orderBy(
            Input::get('column', 'id'), Input::get('order', 'desc')
        );

        foreach ( Input::get('filters', []) as $filter ) {
            $query->whereIn($filter['column'], (array) $filter['values']);
        }

        return $query->paginate();
    }


}
