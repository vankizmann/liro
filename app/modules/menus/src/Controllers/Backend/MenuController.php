<?php

namespace Liro\Menus\Controllers\Backend;

use Illuminate\Http\Request;
use Liro\Menus\Models\Menu;
use Liro\Menus\Models\MenuType;
use Liro\Menus\Requests\MenuStoreRequest;
use Liro\Menus\Requests\MenuUpdateRequest;

class MenuController extends \Liro\System\Http\Controller
{
    public function index(Menu $menus, MenuType $types)
    {
        return view('liro-menus::backend/menus/index', [
            'menus' => $menus->all(), 'types' => $types->with(['menu_tree'])->get()
        ]);
    }

    public function order(Request $request, Menu $menu)
    {
        $menu->scoped(['menu_type_id' => $request->get('type', null)])->rebuildTree($request->get('menus', []));

        return response()->json([
            'message' => trans('liro-menus.messages.menus.ordered')
        ]);
    }

    public function enable(Menu $menu)
    {
        $menu->update([
            'state' => 1
        ]);

        return redirect()->route('liro-menus.backend.menus.index');
    }

    public function disable(Menu $menu)
    {
        $menu->update([
            'state' => 0
        ]);

        return redirect()->route('liro-menus.backend.menus.index');
    }

    public function hidden(Menu $menu)
    {
        $menu->update([
            'hidden' => 1
        ]);

        return redirect()->route('liro-menus.backend.menus.index');
    }

    public function visible(Menu $menu)
    {
        $menu->update([
            'hidden' => 0
        ]);

        return redirect()->route('liro-menus.backend.menus.index');
    }

    public function create(Menu $menu, MenuType $types)
    {
        return view('liro-menus::backend/menus/create', [
            'menu' => $menu, 'types' => $types->all()
        ]);
    }

    public function store(MenuStoreRequest $request, Menu $menu)
    {
        $menu = $menu->create($request->only([
            'state', 'title', 'route', 'package', 'query', 'hidden', 'menu_type_id', 'parent_id'
        ]));

        return response()->json([
            'message' => trans('liro-menus.messages.menus.created'),
            'redirect' => $menu->edit_route
        ]);
    }

    public function edit(Menu $menu, MenuType $types)
    {
        return view('liro-menus::backend/menus/edit', [
            'menu'          => $menu, 
            'types'         => $types->all(), 
            'routes'        => app('menus')->getRouteNamesList(false), 
            'groups'        => app('menus')->getRouteGroups()
        ]);
    }

    public function update(MenuUpdateRequest $request, Menu $menu)
    {
        $menu->update($request->only([
            'state', 'title', 'route', 'package', 'query', 'hidden', 'menu_type_id', 'parent_id'
        ]));

        return response()->json([
            'message' => trans('liro-menus.messages.menus.updated')
        ]);
    }

    public function delete(Menu $menu)
    {
        $menu->delete();

        return redirect()->route('liro-menus.backend.menus.index')->with(
            'success', trans('liro-menus.messages.menus.deleted')
        );
    }

}
