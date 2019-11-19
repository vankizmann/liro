<?php

namespace Liro\Menu\Routing;

use App\Database\Menu;

interface ConnectorInterface
{
    public function provide(Menu $menu);
    public function collect(Menu $menu);
}
