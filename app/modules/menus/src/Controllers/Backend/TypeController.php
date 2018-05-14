<?php

namespace Liro\Menus\Controllers\Backend;

use Illuminate\Support\Facades\App;
use Liro\Menus\Models\Menu;
use Liro\Menus\Models\MenuType;
use Liro\Menus\Requests\TypeStoreRequest;
use Liro\Menus\Requests\TypeUpdateRequest;

class TypeController extends \Liro\System\Http\Controller
{
    public function index(MenuType $types, Menu $menus)
    {
        return view('liro-menus::backend/types/index', [
            'types' => $types->all(), 'themes' => app('modules')->getThemes()
        ]);
    }

    public function create(MenuType $type)
    {
        return view('liro-menus::backend/types/create', [
            'type' => $type, 'themes' => app('modules')->getThemes()
        ]);
    }

    public function store(MenuType $type, TypeStoreRequest $request)
    {
        $type = $type->create($request->only([
            'title', 'route', 'theme'
        ]));

        return response()->json([
            'message' => trans('*.liro-menus.messages.types.created'),
            'redirect' => $type->edit_route
        ]);
    }

    public function edit(MenuType $type)
    {
        return view('liro-menus::backend/types/edit', [
            'type' => $type, 'themes' => app('modules')->getThemes()
        ]);
    }

    public function update(TypeUpdateRequest $request, MenuType $type)
    {
        $type->update($request->only([
            'title', 'route', 'theme'
        ]));

        return response()->json([
            'message' => trans('*.liro-menus.messages.types.updated')
        ]);
    }

    public function delete(MenuType $type)
    {
        dd('delete');
    }

}
