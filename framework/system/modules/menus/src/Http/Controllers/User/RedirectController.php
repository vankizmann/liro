<?php

namespace Liro\Extension\Menus\Http\Controllers\User;

use Liro\Extension\Menus\Models\Menu;
use Liro\System\Cms\Facades\Web;

class RedirectController extends \Liro\System\Http\Controller
{

    public function menu(Menu $menu)
    {

        $id = Web::getMenuAttr('query.menu');

        if ( $id === null ) {
            throw new \Exception('Redirect requires a menu parameter.');
        }

        return redirect()->to($menu->findOrFail($id)->route);
    }

    public function url()
    {
        parse_str(Web::getMenuAttr('query', ''), $params);

        if ( ! array_key_exists('url', $params) ) {
            throw new \Exception('Redirect requires a url parameter.');
        }

        return redirect()->to($params['url']);
    }

}
