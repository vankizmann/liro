<?php

namespace Liro\Web\Menu\Http\Connectors;

use Liro\Menu\Routing\Connector;
use App\Database\Menu;

class MenuConnector extends Connector
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
        //
    }

    /**
     * Provide options for backend.
     *
     * @return array
     */
    public function options()
    {
        $options = [
            'icon' => 'fa fa-globe', 'component' => null, 'links' => []
        ];

        $connector = app('web.menu')->findConnector(function ($connector) {
            return data_get($connector, 'menu.extend.component') === 'WebMenuEdit';
        });

        if ( ! empty($connector) ) {
            $options['links'][] = ['id' => $connector->menu->id, 'text' => $connector->menu->title];
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
