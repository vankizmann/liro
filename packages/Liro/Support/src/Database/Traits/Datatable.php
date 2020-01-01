<?php

namespace Liro\Support\Database\Traits;

use Illuminate\Support\Facades\Request;

trait Datatable
{

    public function scopeDatatable($query)
    {
        $key = $query->getModel()->getKeyName();

        $query->orderBy(
            Request::input('prop', $key), Request::input('dir', 'desc')
        );

        $search = [
            'query' => Request::input('search', ''),
            'columns' => Request::input('search.columns', [$key]),
        ];

        if ( $search['query'] !== '' ) {
            $query->where(function ($query) use ($search) {
                foreach ( $search['columns'] as $column ) {
                    $query->orWhere($column, 'LIKE', '%' . $search['query'] . '%');
                }
            });
        }

        foreach ( Request::input('filter', []) as $key => $filter ) {

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

        $page = (int) Request::input('page', 1);
        $limit = (int) Request::input('limit', 25);

        if ( $page > ceil(($total = $query->count()) / $limit) ) {
            $page = 1;
        }

        $data = $query->offset(($page - 1) * $limit)->limit($limit)->get();

        return [
            'page' => $page, 'limit' => $limit, 'total' => $total, 'data' => $data
        ];
    }


}
