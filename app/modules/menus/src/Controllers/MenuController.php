<?php

namespace Liro\Menus\Controllers;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Menus\Models\Menu;
use Liro\System\Menus\Models\MenuType;
use Liro\Menus\Requests\MenuOrderRequest;
use Liro\Menus\Requests\MenuStoreRequest;
use Liro\Menus\Requests\MenuUpdateRequest;

class MenuController extends \Liro\System\Http\Controller
{

    /**
     * Show all menus in given menutype
     *
     * @param Liro\System\Menus\Models\MenuType $type
     * @return void
     */
    public function index(MenuType $type)
    {
        app('scripts')->addRoutes([
            'liro-menus.menu.index',
            'liro-menus.menu.create',
            'liro-menus.menu.edit'
        ]);

        app('scripts')->addMessages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('scripts')->setData(
            'types', $type->all()
        );

        app('scripts')->setData(
            'active', $type
        );

        app('scripts')->setData(
            'menus', $type->menus()->defaultOrder()->get()->toTree()
        );

        return view('liro-menus::menu/index');
    }

    /**
     * Order and save menus in menutype
     *
     * @param Liro\System\Menus\Models\MenuType $type
     * @param Liro\System\Menus\Models\Menu $menu
     * @param Liro\System\Menus\Requests\MenuOrderRequest $request
     * @return void
     */
    public function order(MenuType $type, Menu $menu, MenuOrderRequest $request)
    {
        $result = $type->menus()->rebuildTree(
            $request->input('menus', [])
        );

        return response()->json([
            'menu' => $type->menus()->defaultOrder()->get()->toTree()
        ]);
    }

    /**
     * Show create form
     *
     * @param Liro\System\Menus\Models\Menu $menu
     * @param Liro\System\Menus\Models\MenuType $type
     * @return void
     */
    public function create(Menu $menu, MenuType $type)
    {
        app('scripts')->addRoutes([
            'liro-menus.menu.index',
            'liro-menus.menu.create',
            'liro-menus.menu.edit'
        ]);

        app('scripts')->addMessages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('scripts')->setData(
            'menu', $menu
        );

        app('scripts')->setData(
            'types', $type->all()
        );

        app('scripts')->setData(
            'modules', app('menus')->getRoutesArray()
        );

        return view('liro-menus::menu/create');
    }

    /**
     * Store a new menu
     *
     * @param Liro\System\Menus\Requests\MenuStoreRequest $request
     * @param Liro\System\Menus\Models\Menu $menu
     * @return void
     */
    public function store(MenuStoreRequest $request, Menu $menu)
    {
        $menu = $menu->create(
            $request->only(['state', 'hide', 'title', 'route', 'module', 'query', 'menu_type_id'])
        );

        return response()->json([
            'menu' => $menu
        ]);
    }

    /**
     * Show edit form
     *
     * @param Liro\System\Menus\Models\Menu $menu
     * @param Liro\System\Menus\Models\MenuType $type
     * @return void
     */
    public function edit(Menu $menu, MenuType $type)
    {
        app('scripts')->addRoutes([
            'liro-menus.menu.index',
            'liro-menus.menu.edit'
        ]);

        app('scripts')->addMessages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('scripts')->setData(
            'menu', $menu
        );

        app('scripts')->setData(
            'types', $type->all()
        );

        app('scripts')->setData(
            'modules', app('menus')->getRoutesArray()
        );

        return view('liro-menus::menu/edit');
    }

    /**
     * Update menu
     *
     * @param Liro\System\Menus\Models\MenuUpdateRequest $request
     * @param Liro\System\Menus\Models\Menu $menu
     * @return void
     */
    public function update(MenuUpdateRequest $request, Menu $menu)
    {
        $menu->update(
            $request->only(['state', 'hide', 'title', 'route', 'module', 'query', 'menu_type_id'])
        );

        return response()->json([
            'menu' => $menu
        ]);
    }

}