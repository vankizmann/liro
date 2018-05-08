<?php

namespace Liro\Menus\Controllers;

use Illuminate\Http\Request;
use Liro\Menus\Models\Menu;

class BackendMenuController
{

    public function index(Request $request, $type = 1)
    {
        $query = new Menu;

        return view('liro-menus::index', [
            'menus' => $query->getType($type)->get()
        ]);
    }

    public function order(Request $request, $type = 1)
    {
        $orders = $request->input('order', []);

        foreach ( $orders as $order ) {

            $node = Menu::findOrFail($order['id']);

            $node->parent_id = $order['parent_id'];
            $node->_lft = $order['_lft'];
            $node->_rgt = $order['_rgt'];
            

            $node->save();
        }

        // Menu::fixTree();

        return $orders;
    }

    public function create(Request $request)
    {
        return null;
    }

}
