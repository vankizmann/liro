<?php

namespace Liro\Menus\Controllers\Ajax;

use Illuminate\Http\Request;
use Liro\System\Menus\Models\MenuType;
use Liro\Menus\Requests\TypeStoreRequest;
use Liro\Menus\Requests\TypeUpdateRequest;

class TypeController extends \Liro\System\Http\Controller
{

    public function index(MenuType $type)
    {
        return response()->json($type->all(), 200);
    }

    public function show(MenuType $type)
    {
        return response()->json($type, 200);
    }

    public function store(TypeStoreRequest $request, MenuType $type)
    {
        $response = $type->create(
            $request->all()
        );

        return response()->json($response, 201);
    }

    public function update(TypeUpdateRequest $request, MenuType $type)
    {
        $type->update(
            $request->all()
        );

        return response()->json($type, 200);
    }

}