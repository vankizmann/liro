<?php

namespace Liro\Support\Routing;

use Liro\Support\Http\RouteHelper;

class UrlGenerator extends \Illuminate\Routing\UrlGenerator
{

    public function to($path, $extra = [], $secure = null)
    {
        $path = RouteHelper::replaceDomain($path);
        $path = RouteHelper::replaceLocale($path);

        return parent::to($path, $extra, $secure);
    }

    public function route($name, $parameters = [], $absolute = true)
    {
        $name = RouteHelper::prefixLocale($name);
        return parent::route($name, $parameters, $absolute);
    }

}
