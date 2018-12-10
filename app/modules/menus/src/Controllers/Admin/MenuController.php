<?php

namespace Liro\Menus\Controllers\Admin;

use Liro\System\Menus\Models\Menu;
use Liro\System\Menus\Models\MenuType;

class MenuController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->module('liro-menus');
    }

    public function index(MenuType $type)
    {
        app('assets')->dataArray([
            'type' => $type->append('menus'), 'types' => $type->all()
        ]);

        return view('liro-menus::menu/index');
    }

    public function create(Menu $menu, MenuType $type)
    {
        $modules = app('menus')->getRoutesArray(['user', 'admin']);

        app('assets')->dataArray([
            'menu' => $menu, 'modules' => $modules, 'types' => $type->all()
        ]);

        return view('liro-menus::menu/create');
    }

    public function edit(Menu $menu, MenuType $type)
    {
        $modules = app('menus')->getRoutesArray('user');

        app('assets')->dataArray([
            'menu' => $menu, 'modules' => $modules, 'types' => $type->all()
        ]);

        return view('liro-menus::menu/edit');
    }

}