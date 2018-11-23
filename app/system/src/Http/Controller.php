<?php

namespace Liro\System\Http;

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\URL;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use DispatchesJobs, ValidatesRequests;

    public function __construct(Application $app)
    {
        // $app['view']->addNamespace('theme', "app/modules/backend/views");

        // $app['modules']->load(['liro-backend']);
    }
}
