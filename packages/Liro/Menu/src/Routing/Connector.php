<?php

namespace Liro\Menu\Routing;

use App\Database\Menu;

class Connector implements ConnectorInterface
{
    /**
     * Provide router options.
     *
     * @param \App\Database\Menu $menu
     * @param array $options
     * @return array|bool
     */
    public function route(Menu $menu, $options)
    {
        return false;
    }

    /**
     * Provide options for backend.
     *
     * @return array
     */
    public function options()
    {
        return [
            'icon' => 'fa fa-question', 'component' => null
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
