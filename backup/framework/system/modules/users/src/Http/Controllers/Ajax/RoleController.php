<?php

namespace Liro\Extension\Users\Http\Controllers\Ajax;

use Liro\System\Http\Controller;
use Liro\Extension\Users\Models\Role;
use Liro\Extension\Users\Http\Requests\RoleStoreRequest;
use Liro\Extension\Users\Http\Requests\RoleUpdateRequest;

class RoleController extends Controller
{
    public function __construct()
    {
        $this->middleware(['ajax', 'guard']);
    }

    public function index(Role $role)
    {
        return response()->json($role->all(), 200);
    }

    public function show(Role $role)
    {
        return response()->json($role, 200);
    }

    public function store(RoleStoreRequest $request, Role $role)
    {
        $response = $role->create(
            $request->all()
        );

        return response()->json($response, 201);
    }

    public function update(RoleUpdateRequest $request, Role $role)
    {
        $role->update(
            $request->all()
        );

        return response()->json($role, 200);
    }

}
