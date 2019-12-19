<?php

namespace Liro\Web\Menu\Http\Controllers;

use App\Database\Menu;
use App\Http\Controllers\Controller;
use Liro\Web\Menu\Http\Requests\MenuUpdateRequest;

class MenuController extends Controller
{
    public function __construct()
    {
        parent::__construct();

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

    public function getEditRoute($id)
    {
        $menu = Menu::withDepthGuard()->findOrFail($id);

        return response()->json([
            'data' => $menu->toArray()
        ]);
    }

    public function postUpdateRoute(MenuUpdateRequest $request, $id)
    {
        $menu = Menu::withDepthGuard()
            ->findOrFail($id);

        $menu->fill($request->input())
            ->save();

        return response()->json([
            'data' => $menu->toArray(), 'message' => trans('Menu has been updated!')
        ]);
    }

}
