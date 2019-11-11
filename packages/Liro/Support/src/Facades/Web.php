<?php

namespace Liro\Support\Facades;

use Illuminate\Support\Facades\Facade;

class Web extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'web.container';
    }

}
