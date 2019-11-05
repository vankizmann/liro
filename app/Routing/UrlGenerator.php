<?php

namespace Liro\System\Routing;

class UrlGenerator extends \Illuminate\Routing\UrlGenerator
{

    public function to($path, $extra = [], $secure = null)
    {
        $path = app('cms.routes.helper')->replaceDomain($path);
        $path = app('cms.routes.helper')->replaceLocale($path);

        return parent::to($path, $extra, $secure);
    }

    public function route($name, $parameters = [], $absolute = true)
    {
        $name = app('cms.routes.helper')->prefixLocale($name);
        return parent::route($name, $parameters, $absolute);
    }

}
