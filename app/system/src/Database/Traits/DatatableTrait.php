<?php

namespace Liro\System\Database\Traits;

use Illuminate\Support\Facades\Input;

trait DatatableTrait
{

    public function scopeDatatable($query)
    {
        $query->orderBy(
            Input::get('order.column', 'id'), Input::get('order.direction', 'desc')
        );

        $search = [
            'query' => Input::get('search.query', ''),
            'columns' => Input::get('search.columns', ['id']),
        ];

        if ( $search['query'] !== '' ) {
            $query->where(function ($query) use ($search) {
                foreach ( $search['columns'] as $column ) {
                    $query->orWhere($column, 'LIKE', '%' . $search['query'] . '%');
                }
            });
        }

        foreach ( Input::get('filters', []) as $key => $values ) {
            if ( count($values) !== 0 ) {
                $query->whereIn($key, (array) $values);
            }
        }

        $paginatePage = (int) Input::get('paginate.page', 1);
        $paginateLimit = (int) Input::get('paginate.limit', 25);

        if ( $paginatePage > ceil($query->count() / $paginateLimit) ) {
            $paginatePage = 1;
        }

        return $query->paginate($paginateLimit, ['*'], 'page', $paginatePage);
    }


}
