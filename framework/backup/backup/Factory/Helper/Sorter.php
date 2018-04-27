<?php

namespace Liro\System\Factory\Helper;

use Illuminate\Support\Collection;
use MJS\TopSort\Implementations\StringSort;

class Sorter
{

    protected $sort;

    protected $store;

    public function __construct()
    {
        $this->sort = new StringSort;
        $this->store = new Collection;
    }

    public function add($name, $data, $dependencies = [])
    {
        $this->sort->add($name, $dependencies);
        $this->store->put($name, $data);
    }

    public function forget($name)
    {
        $this->store->pull($name);
    }

    public function sort()
    {
        $order = $this->sort->sort();

        $result = $this->store->sortBy(function($item, $key) use ($order) {
            return array_search($key, $order, true);
        });

        return $result;
    }

}
