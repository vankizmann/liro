<?php

namespace Liro\Web\Menu\Http\Connectors;

use Illuminate\Support\Facades\Route;
use Liro\Menu\Routing\Connector;
use Liro\Support\Routing\RouteHelper;
use App\Database\Menu;

class VueConnector extends Connector
{
    /**
     * Provide router options.
     *
     * @param \App\Database\Menu $menu
     * @param array $options
     * @return void
     */
    public function route(Menu $menu, $options)
    {
        if ( ! empty($menu->depth) ) {
            return;
        }

        $options['route'] = str_join('/', $options['route'], '{path?}');

        if ( RouteHelper::isOptionsRoute($options) ) {
            app('web.menu')->setMenu($menu);
        }

        $options['uses'] = function () use ($menu, $options) {
            return view('web-menu::vue/default');
        };

        Route::get($options['route'], $options)->where(['path' => '.*']);
    }

    /**
     * Provide data for view.
     *
     * @param \App\Database\Menu $menu
     * @return array|bool
     */
    public function provide(Menu $menu)
    {
        return false;
    }

    /**
     * Collect data for menu rendering.
     *
     * @param \App\Database\Menu $menu
     * @return array|bool
     */
    public function collect(Menu $menu)
    {
        return false;
    }
}
