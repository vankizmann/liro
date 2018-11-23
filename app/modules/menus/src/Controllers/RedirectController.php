<?php

namespace Liro\Menus\Controllers;

use Liro\System\Menus\Models\Menu;

class RedirectController extends \Liro\System\Http\Controller
{

    public function menu(Menu $menu)
    {
        $menu = app()->getMenu();

        if ( $menu == null ) {
            throw new \Exception('Redirect can only be called from menu.');
        }

        parse_str($menu->query, $params);

        if ( ! array_key_exists('menu', $params) ) {
            throw new \Exception('Redirect requires a menu parameter.');
        }

        return redirect()->to(
            $menu->findOrFail($params['menu'])->route_prefix
        );
    }

    public function url()
    {
        $menu = app()->getMenu();

        if ($menu == null) {
            throw new \Exception('Redirect can only be called from menu.');
        }

        parse_str($menu->query, $params);

        if ( ! array_key_exists('url', $params) ) {
            throw new \Exception('Redirect requires a url parameter.');
        }

        return redirect()->to($params['url']);
    }

}