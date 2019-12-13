<?php

namespace Liro\Web\Auth\Http\Connectors;

use Liro\Menu\Routing\Connector;
use App\Database\Menu;

class LoginConnector extends Connector
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
