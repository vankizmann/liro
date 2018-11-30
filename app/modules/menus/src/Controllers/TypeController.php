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
        app('assets')->routes([
            'liro-menus.type.index',
            'liro-menus.type.create',
            'liro-menus.type.edit'
        ]);

        app('assets')->messages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('assets')->data(
            'types', $type->all()
        );

        return view('liro-menus::type/index');
    }

    public function create(MenuType $type)
    {
        app('assets')->routes([
            'liro-menus.type.index',
            'liro-menus.type.create',
            'liro-menus.type.edit'
        ]);

        app('assets')->messages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('assets')->data(
            'type', $type
        );

        app('assets')->data(
            'locales', app('languages')->getLocalesArray()
        );

        // app('assets')->data(
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
        app('assets')->routes([
            'liro-menus.type.index',
            'liro-menus.type.edit'
        ]);

        app('assets')->messages([
            'liro-menus::module',
            'liro-menus::form',
            'liro-menus::message'
        ]);

        app('assets')->data(
            'type', $type->toArray()
        );

        app('assets')->data(
            'locales', app('languages')->getLocalesArray()
        );

        // app('assets')->data(
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