<?php

namespace Liro\Menus\Controllers\Ajax;

use Liro\Extension\Menus\Models\Domain;
use Liro\Menus\Requests\TypeStoreRequest;
use Liro\Menus\Requests\TypeUpdateRequest;

class TypeController extends \Liro\System\Http\Controller
{

    public function index(Domain $type)
    {
        return response()->json($type->all(), 200);
    }

    public function show(Domain $type)
    {
        return response()->json($type, 200);
    }

    public function store(TypeStoreRequest $request, Domain $type)
    {
        $response = $type->create(
            $request->all()
        );

        return response()->json($response, 201);
    }

    public function update(TypeUpdateRequest $request, Domain $type)
    {
        $type->update(
            $request->all()
        );

        return response()->json($type, 200);
    }

}
