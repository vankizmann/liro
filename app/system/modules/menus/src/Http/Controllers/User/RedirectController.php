<?php

namespace Liro\Menus\Controllers\User;

use Liro\Extension\Menus\Models\Menu;

class RedirectController extends \Liro\System\Http\Controller
{

    public function menu(Menu $menu)
    {
        parse_str(app()->getMenuKey('query', ''), $params);

        if ( ! array_key_exists('menu', $params) ) {
            throw new \Exception('Redirect requires a menu parameter.');
        }

        return redirect()->to(
            $menu->findOrFail($params['menu'])->route_prefix
        );
    }

    public function url()
    {
        parse_str(app()->getMenuKey('query', ''), $params);

        if ( ! array_key_exists('url', $params) ) {
            throw new \Exception('Redirect requires a url parameter.');
        }

        return redirect()->to($params['url']);
    }

}
