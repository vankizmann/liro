<?php

namespace Liro\Web\Page\Http\Connectors;

use Illuminate\Support\Arr;
use Liro\Menu\Routing\Connector;
use Liro\Support\Routing\RouteHelper;
use App\Database\Menu;

class PageConnector extends Connector
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
        if ( RouteHelper::isOptionsRoute($options) ) {
            app('web.menu')->setMenu($menu);
        }

        app('router')->any($options['route'], array_merge($options, [
            'uses' => 'Liro\Web\Page\Http\Controllers\PageViewController@anyPageRoute'
        ]));
    }

    /**
     * Provide options for backend.
     *
     * @return array
     */
    public function options()
    {
        $menu = [
            'icon' => 'fa fa-file', 'component' => null
        ];

        $connector = app('web.menu')->findConnector(function ($connector) {
            return Arr::get((array) $connector->menu->extend, 'component') === 'WebMenuEdit';
        });

        $module = [
            'edit' => $connector ? $connector->menu->id : null
        ];

        return [
            'menu' => $menu, 'module' => $module
        ];
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
