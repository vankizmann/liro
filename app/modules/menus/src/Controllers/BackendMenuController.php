<?php

namespace Liro\Menus\Controllers;

use Illuminate\Http\Request;
use Liro\Menus\Models\Menu;

class BackendMenuController
{

    public function index(Request $request)
    {
        $query = new Menu;

        $menuTypeId = $request->input('menu_type_id');

        if ( $menuTypeId ) {
            $query = $query->where('menu_type_id', (int) $menuTypeId);
        }

        return view('liro.menus::index', [
            'menus' => $query->get()
        ]);
    }

}
