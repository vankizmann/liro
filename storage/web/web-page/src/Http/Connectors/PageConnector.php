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
        $options = [
            'icon' => 'fa fa-file', 'component' => null, 'links' => []
        ];

        $connector = app('web.menu')->findVueConnector('WebPageEdit');

        if ( ! empty($connector) ) {
            $options['links'][] = ['id' => $connector->menu->id, 'text' => trans('Edit page')];
        }

        $options['connect'] = [];

        $connector = app('web.menu')->findVueConnector('WebPageIndex');

        if ( ! empty($connector) ) {
            $options['connect']['index'] = $connector->menu->id;
        }

        $connector = app('web.menu')->findVueConnector('WebPageEdit');

        if ( ! empty($connector) ) {
            $options['connect']['edit'] = $connector->menu->id;
        }

        return $options;
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
