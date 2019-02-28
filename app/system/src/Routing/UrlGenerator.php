<?php

namespace Liro\System\Routing;

class UrlGenerator extends \Illuminate\Routing\UrlGenerator
{

    public function route($name, $parameters = [], $absolute = true)
    {
        $name = app('cms.routes.helper')->prefixLocale($name);
        return parent::route($name, $parameters, $absolute);
    }

}
