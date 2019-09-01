<?php

namespace Liro\System\Database\Traits;

use Illuminate\Support\Facades\Input;

trait DatatableTrait
{

    public function scopeDatatable($query)
    {
        $query->orderBy(
            Input::get('sort.prop', 'id'), Input::get('sort.dir', 'desc')
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

        foreach ( Input::get('filter', []) as $key => $filter ) {

            if ( empty($filter['value']) ) {
                continue;
            }

            $operator = '=';

            if ( $filter['operator'] === 'eq' ) {
                $operator = '=';
            }

            if ( $filter['operator'] === 'ne' ) {
                $operator = '!=';
            }

            if ( $filter['operator'] === 'li' ) {
                $operator = 'LIKE';
            }

            if ( $filter['operator'] === 'nl' ) {
                $operator = 'NOT LIKE';
            }

            if ( $filter['operator'] === 'in' ) {
                $operator = 'IN';
            }

            if ( $filter['operator'] === 'ni' ) {
                $operator = 'NOT IN';
            }

            $value = $filter['value'];

            if ( $filter['operator'] === 'li' ) {
                $value = '%' . $filter['value'] . '%';
            }

            if ( $filter['operator'] === 'nl' ) {
                $value = '%' . $filter['value'] . '%';
            }

            if ( $filter['type'] === 'options' ) {
                $value = explode(',', $filter['value']);
            }

            $query->where($filter['property'], $operator, $value);
        }

        $paginatePage = (int) Input::get('paginate.page', 1);
        $paginateLimit = (int) Input::get('paginate.limit', 25);

        if ( $paginatePage > ceil($query->count() / $paginateLimit) ) {
            $paginatePage = 1;
        }

        return $query->paginate($paginateLimit, ['*'], 'page', $paginatePage);
    }


}
