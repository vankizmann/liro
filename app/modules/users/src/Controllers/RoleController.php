<?php

namespace Liro\Users\Controllers;

use Illuminate\Http\Request;
use Liro\System\Users\Models\UserRole;
use Liro\Users\Requests\RoleStoreRequest;
use Liro\Users\Requests\RoleUpdateRequest;

class RoleController extends \Liro\System\Http\Controller
{

    public function index(UserRole $role)
    {
        app('scripts')->addRoutes([
            'liro-users.role.index',
            'liro-users.role.create',
            'liro-users.role.edit'
        ]);

        app('scripts')->addMessages([
            'liro-users::module',
            'liro-users::form',
            'liro-users::message'
        ]);

        app('scripts')->setData(
            'roles', $role->all()
        );

        return view('liro-users::role/index');
    }

    public function create(UserRole $role)
    {
        app('scripts')->addRoutes([
            'liro-users.role.index',
            'liro-users.role.create',
            'liro-users.role.edit'
        ]);

        app('scripts')->addMessages([
            'liro-users::module',
            'liro-users::form',
            'liro-users::message'
        ]);

        app('scripts')->setData(
            'modules', app('menus')->getModuleNames()
        );

        app('scripts')->setData(
            'role', $role
        );

        return view('liro-users::role/create');
    }

    public function store(RoleStoreRequest $request, UserRole $role)
    {
        $role = $role->create(
            $request->only(['title', 'description', 'access', 'route_names'])
        );

        return response()->json([
            'role' => $role
        ]);
    }

    public function edit(UserRole $role)
    {
        app('scripts')->addRoutes([
            'liro-users.role.index',
            'liro-users.role.edit'
        ]);

        app('scripts')->addMessages([
            'liro-users::module',
            'liro-users::form',
            'liro-users::message'
        ]);

        app('scripts')->setData(
            'modules', app('menus')->getModuleNames()
        );

        app('scripts')->setData(
            'role', $role
        );

        return view('liro-users::role/edit');
    }

    public function update(RoleUpdateRequest $request, UserRole $role)
    {
        $role->update(
            $request->only(['title', 'description', 'access', 'route_names'])
        );

        return response()->json([
            'role' => $role
        ]);
    }

}