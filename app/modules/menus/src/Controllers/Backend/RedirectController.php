<?php

namespace Liro\Menus\Controllers\Backend;

use Illuminate\Http\Request;
use Liro\Menus\Models\Menu;

class RedirectController extends \Liro\System\Http\Controller
{
    public function menu(Request $request)
    {
        $menu = app('menus')->query('menu');

        return redirect(
            app('menus')->get($menu)->prefix_route
        );
    }

    public function link(Request $request)
    {
        return redirect(
            app('menus')->query('link')
        );
    }

}
