<?php

namespace Liro\Menu\Routing;

use App\Database\Menu;

class Connector implements ConnectorInterface
{

    public function provide(Menu $menu)
    {
        // return [$menu->route, 'App\Http\UserController@index'];
    }

    public function collect(Menu $menu)
    {
        // return User::matrix($menu)->all();
    }

}
