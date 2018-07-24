<?php

namespace Liro\Menus\Options;

use Illuminate\Contracts\Foundation\Application;

class RedirectOption
{
    public function menu(Application $app) {

        $app['scripts']->data([

        ]);

        $app['scripts']->link('app-menus-option-menu', 'liro-menus:resources/dist/app-options.js');

        return 'app-menus-option-menu';
    }

    public function link(Application $app) {
        
        $app['scripts']->link('app-menus-option-menu', 'liro-menus:resources/dist/app-options.js');

        return 'app-menus-option-link';
    }


}