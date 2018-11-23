<?php

namespace Liro\System\Routing;

class UrlGenerator extends \Illuminate\Routing\UrlGenerator
{

    public function route($name, $parameters = [], $absolute = true)
    {
        return parent::route(app('menus')->addKeyLocale($name), $parameters, $absolute);
    }

}
