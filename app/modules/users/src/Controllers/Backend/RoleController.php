<?php

namespace Liro\Users\Controllers\Backend;

use Illuminate\Support\Facades\App;
use Liro\Users\Models\User;
use Liro\Users\Models\UserRole;
use Liro\Users\Requests\RoleStoreRequest;
use Liro\Users\Requests\RoleUpdateRequest;

class RoleController extends \Liro\System\Http\Controller
{
    public function index(UserRole $roles, User $users)
    {
        $routes = app('menus')->getRouteNames();

        return view('liro-users::backend/roles/index', [
            'roles' => $roles->all(), 'users' => $users->all(), 'routes' => $routes
        ]);
    }

    public function create(UserRole $role)
    {
        $routes = app('menus')->getRouteNames();

        return view('liro-users::backend/roles/create', [
            'role' => $role, 'routes' => $routes
        ]);
    }

    public function store(UserRole $role, RoleStoreRequest $request)
    {
        $role = $role->create($request->only(
            ['title', 'access', 'description', 'route_names']
        ));

        return response()->json([
            'message' => trans('*.liro-users.messages.roles.created'), 
            'redirect' => $role->edit_route
        ]);
    }

    public function edit(UserRole $role)
    {
        $routes = app('menus')->getRouteNames();

        return view('liro-users::backend/roles/edit', [
            'role' => $role, 'routes' => app('menus')->getRouteNames()
        ]);
    }

    public function update(RoleUpdateRequest $request, UserRole $role)
    {
        $role->update($request->only([
            'title', 'description', 'route_names'
        ]));

        return response()->json([
            'message' => trans('*.liro-users.messages.roles.updated')
        ]);
    }

    public function delete(UserRole $role)
    {
        dd('delete');
    }

}
