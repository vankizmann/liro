<?php

namespace Liro\Users\Controllers\Ajax;

use Illuminate\Http\Request;
use Liro\System\Users\Models\UserRole;
use Liro\Users\Requests\RoleStoreRequest;
use Liro\Users\Requests\RoleUpdateRequest;

class RoleController extends \Liro\System\Http\Controller
{

    public function index(UserRole $role)
    {
        return response()->json($role->all(), 200);
    }

    public function show(UserRole $role)
    {
        return response()->json($role, 200);
    }

    public function store(RoleStoreRequest $request, UserRole $role)
    {
        $response = $role->create(
            $request->all()
        );

        return response()->json($response, 201);
    }

    public function update(RoleUpdateRequest $request, UserRole $role)
    {
        $role->update(
            $request->all()
        );

        return response()->json($role, 200);
    }

}