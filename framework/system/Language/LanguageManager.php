<?php

namespace Framework\Language;

use Illuminate\Contracts\Foundation\Application;

class LanguageManager implements \IteratorAggregate
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function getIterator()
    {
        return new \ArrayIterator($this->modules);
    }

}
