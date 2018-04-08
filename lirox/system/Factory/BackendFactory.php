<?php

namespace Lirox\System\Factory;

use Lirox\System\Factory\BaseFactory;

use Symfony\Component\ClassLoader\Psr4ClassLoader as ClassLoader;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Lang;
use Lirox\System\Facades\Asset;
use Lirox\System\Facades\Package;
use Lirox\System\Facades\Prototype;

class BackendFactory extends BaseFactory
{

    public function boot()
    {

        Asset::linkJs('cms.bootstrap', '/resource/dist/js/bootstrap.js');
        Asset::linkJs('cms.app', '/resource/dist/js/app.js', ['cms.bootstrap', 'cms.locale']);

        // Lang::addJsonPath('lirox/language');
        View::share('template', 'liro.backend.view.layout');

        Package::backend();
    }
}