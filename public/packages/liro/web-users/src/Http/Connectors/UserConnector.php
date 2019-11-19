<?php

namespace Liro\Web\User\Connectors;

use App\Http\Connectors\Connector;
use App\Database\Menu;
use App\Database\User;

class UserConnector extends Connector
{
    public function provide(Menu $menu)
    {
        return [$menu->route, 'Liro\Web\User\Http\UserController@index'];
    }

    public function collect(Menu $menu)
    {
        return User::matrix($menu)->all();
    }
}
