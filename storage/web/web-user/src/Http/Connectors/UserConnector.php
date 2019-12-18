<?php

namespace Liro\Web\User\Http\Connectors;

use Liro\Menu\Routing\Connector;
use App\Database\Menu;

class UserConnector extends Connector
{
    /**
     * Provide router options.
     *
     * @param \App\Database\Menu $menu
     * @return array|bool
     */
    public function route(Menu $menu)
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
        $menu = [
            'icon' => 'fab fa-user', 'component' => null
        ];

        $module = [
            'icon' => asset('web-user::img/web-user.svg')
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
