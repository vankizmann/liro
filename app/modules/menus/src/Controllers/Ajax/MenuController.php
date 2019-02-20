<?php

namespace Liro\Menus\Controllers\Ajax;

use Liro\System\Menus\Models\Menu;
use Liro\System\Menus\Models\Domain;
use Liro\Menus\Requests\MenuOrderRequest;
use Liro\Menus\Requests\MenuStoreRequest;
use Liro\Menus\Requests\MenuUpdateRequest;

class MenuController extends \Liro\System\Http\Controller
{

    public function index(Domain $type)
    {
        return response()->json($type, 200);
    }

    public function show(Menu $menu)
    {
        return response()->json($menu, 200);
    }

    public function store(MenuStoreRequest $request, Menu $menu)
    {
        $response = $menu->create(
            $request->all()
        );

        return response()->json($response, 201);
    }

    public function update(MenuUpdateRequest $request, Menu $menu)
    {
        $menu->update(
            $request->all()
        );

        return response()->json($menu, 200);
    }

    public function order(MenuOrderRequest $request, Domain $type)
    {
        $type->menus()->rebuildTree(
            $request->input('menus', [])
        );

        return response()->json($type);
    }

}
