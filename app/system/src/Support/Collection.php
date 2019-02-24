<?php

namespace Liro\System\Support;

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

}
