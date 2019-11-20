<?php

namespace Liro\Support\Routing;

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

    /**
     * Generate the URL to an application asset.
     *
     * @param  string  $path
     * @param  bool|null  $secure
     * @return string
     */
    public function asset($path, $secure = null)
    {
        return app('web.assets')->file($path, $secure);
    }

}
