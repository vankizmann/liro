<?php

namespace Liro\System\Support;

use MJS\TopSort\Implementations\StringSort;

class Collection extends \Illuminate\Support\Collection
{

    public function setMerge($key, $collection)
    {
        $value = $this->wrap(
            $this->get($key, new self)
        );

        $this->put($key, $value->merge($collection));
    }

    public function mergeDiff($key, $collection)
    {
        $diffrence = $this->wrap($collection)->diff(
            $this->get($key, new self)
        );

        $this->setMerge($key, $diffrence);

        return $diffrence;
    }

    public function sortByDeps($depsKey = 'deps')
    {
        $sorter = new StringSort();

        $this->each(function ($item, $key) use ($sorter, $depsKey) {
            $sorter->add($key, $this->keys()->intersect($item[$depsKey])->toArray());
        });

        $sorted = $sorter->sort();

        $result = $this->sortBy(function ($item, $key) use ($sorted) {
            return collect($sorted)->search($key);
        });

        return $result;
    }

}
