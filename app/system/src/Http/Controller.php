<?php

namespace Liro\System\Http;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Contracts\Foundation\Application;

class Controller extends BaseController
{
    use DispatchesJobs, ValidatesRequests;

    public function __construct(Application $app)
    {
        $menu = $app['menus']->current();

        if ( ! $menu ) {
            return;
        }

        $app['modules']->load([$menu->type->theme]);
    }
}
