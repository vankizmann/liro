<?php

namespace Liro\Menus\Controllers\Admin;

use Liro\System\Http\Controller;
use Liro\Extension\Menus\Models\Menu;
use Liro\Extension\Menus\Models\Domain;

class MenuController extends Controller
{

    public function __construct()
    {
        app('assets')->init('liro-menus');
    }

    public function index(Domain $type)
    {
        $modules = app('menus')->getModuleNames(['admin', 'user']);

        app('assets')->dataArray([
            'type' => $type->append('menus'), 'types' => $type->all(), 'modules' => $modules
        ]);

        return view('liro-menus::menu/index');
    }

    public function create(Menu $menu, Domain $type)
    {
        $modules = app('menus')->getModuleNames(['admin', 'user']);

        app('assets')->dataArray([
            'menu' => $menu, 'modules' => $modules, 'types' => $type->all()
        ]);

        return view('liro-menus::menu/create');
    }

    public function edit(Menu $menu, Domain $type)
    {
        $modules = app('menus')->getModuleNames(['admin', 'user']);

        app('assets')->dataArray([
            'menu' => $menu, 'modules' => $modules, 'types' => $type->all()
        ]);

        return view('liro-menus::menu/edit');
    }

}