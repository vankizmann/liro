<?php

namespace Liro\Users\Controllers;

use Illuminate\Http\Request;
use Liro\System\Users\Models\UserRole;
use Liro\Users\Requests\RoleStoreRequest;
use Liro\Users\Requests\RoleUpdateRequest;

class RoleController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->module('liro-users');
    }

    public function index(UserRole $role)
    {
        app('assets')->data(
            'roles', $role->all()
        );

        return view('liro-users::role/index');
    }

    public function create(UserRole $role)
    {
        app('assets')->data(
            'modules', app('menus')->getModuleNames()
        );

        app('assets')->data(
            'role', $role
        );

        return view('liro-users::role/create');
    }

    public function store(RoleStoreRequest $request, UserRole $role)
    {
        $role = $role->create(
            $request->all()
        );

        return response()->json([
            'role' => $role
        ], 201);
    }

    public function edit(UserRole $role)
    {
        app('assets')->data(
            'modules', app('menus')->getModuleNames()
        );

        app('assets')->data(
            'role', $role
        );

        return view('liro-users::role/edit');
    }

    public function update(RoleUpdateRequest $request, UserRole $role)
    {
        $role->update(
            $request->all()
        );

        return response()->json([
            'role' => $role
        ], 200);
    }

}