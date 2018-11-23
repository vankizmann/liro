<?php

namespace Liro\Menus\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Liro\System\Menus\Models\MenuType;
use Liro\Menus\Requests\TypeStoreRequest;
use Liro\Menus\Requests\TypeUpdateRequest;

class TypeController extends \Liro\System\Http\Controller
{

    public function index(MenuType $type)
    {
        app('scripts')->addRoutes([
            'liro-menus.type.index',
            'liro-menus.type.create',
            'liro-menus.type.edit'
        ]);

        app('scripts')->addMessages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('scripts')->setData(
            'types', $type->all()
        );

        return view('liro-menus::type/index');
    }

    public function create(MenuType $type)
    {
        app('scripts')->addRoutes([
            'liro-menus.type.index',
            'liro-menus.type.create',
            'liro-menus.type.edit'
        ]);

        app('scripts')->addMessages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('scripts')->setData(
            'type', $type
        );

        app('scripts')->setData(
            'locales', app('languages')->getLocalesArray()
        );

        // app('scripts')->setData(
        //     'modules', app('modules')->getRoutesArray()
        // );

        return view('liro-menus::type/create');
    }

    public function store(TypeStoreRequest $request, MenuType $type)
    {
        $type = $type->create(
            $request->only(['state', 'locale', 'title', 'route', 'theme'])
        );

        return response()->json([
            'type' => $type
        ]);
    }

    public function edit(MenuType $type)
    {
        app('scripts')->addRoutes([
            'liro-menus.type.index',
            'liro-menus.type.edit'
        ]);

        app('scripts')->addMessages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('scripts')->setData(
            'type', $type->toArray()
        );

        app('scripts')->setData(
            'locales', app('languages')->getLocalesArray()
        );

        // app('scripts')->setData(
        //     'modules', app('menus')->getRoutesArray()
        // );

        return view('liro-menus::type/edit');
    }

    public function update(TypeUpdateRequest $request, MenuType $type)
    {
        $type->update(
            $request->only(['state', 'locale', 'title', 'route', 'theme'])
        );

        return response()->json([
            'type' => $type
        ]);
    }

}