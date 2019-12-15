<?php

namespace Liro\Web\Menu\Http\Controllers;

use App\Database\Menu;
use App\Http\Controllers\Controller;

class MenuController extends Controller
{
    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function getTreeRoute()
    {
        $menus = Menu::withDepthGuard()->enabled()->get()
            ->toHierarchy()->values();

        return response()->json($menus);
    }

    public function getIndexRoute()
    {
        $menus = Menu::withDepthGuard()->enabled()->datatable();

        return response()->json($menus);
    }

    public function getCreateRoute()
    {
        $menu = new Menu;

        return response()->json($menu);
    }

    public function postStoreRoute()
    {
        $menu = new Menu;

        return response()->json($menu);
    }

    public function getShowRoute($id)
    {
        $menu = Menu::withDepthGuard()->findOrFail($id);

        return response()->json($menu);
    }

    public function postEditRoute($id)
    {
        $menu = Menu::withDepthGuard()->findOrFail($id);

        return response()->json($menu);
    }

}
