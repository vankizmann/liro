<?php

namespace Liro\System\Cms\Facades;

use Illuminate\Support\Facades\Facade;

class Routes extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'cms.routes';
    }

}
