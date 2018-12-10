<?php

namespace Liro\Menus\Controllers\Admin;

use Liro\System\Menus\Models\MenuType;

class TypeController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->module('liro-menus');
    }

    public function index(MenuType $type)
    {
        $locales = app('languages')->getLocalesArray();

        app('assets')->dataArray([
            'types' => $type->all(), 'locales' => $locales
        ]);

        return view('liro-menus::type/index');
    }

    public function create(MenuType $type)
    {
        $locales = app('languages')->getLocalesArray();

        app('assets')->dataArray([
            'type' => $type, 'locales' => $locales
        ]);

        return view('liro-menus::type/create');
    }

    public function edit(MenuType $type)
    {
        $locales = app('languages')->getLocalesArray();

        app('assets')->dataArray([
            'type' => $type, 'locales' => $locales
        ]);

        return view('liro-menus::type/edit');
    }

}