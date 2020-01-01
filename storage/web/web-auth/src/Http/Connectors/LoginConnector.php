<?php

namespace Liro\Web\Auth\Http\Connectors;

use Liro\Menu\Routing\Connector;
use Liro\Support\Routing\RouteHelper;
use App\Database\Menu;

class LoginConnector extends Connector
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

        app('router')->get($options['route'], array_merge($options, [
            'uses' => 'Liro\Web\Auth\Http\Controllers\AuthViewController@getLoginRoute'
        ]));

        app('router')->post($options['route'], array_merge($options, [
            'uses' => 'Liro\Web\Auth\Http\Controllers\AuthViewController@postLoginRoute'
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
            'icon' => 'fa fa-user-lock', 'component' => null, 'links' => []
        ];

        return $options;
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
