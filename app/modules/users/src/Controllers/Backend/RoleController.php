<?php

namespace Liro\Users\Controllers\Backend;

use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;
use Liro\System\Http\Controller;
use Liro\Users\Models\User;
use Liro\Users\Models\UserRole;
use Liro\System\Users\Models\UserRoleRoute;

class RoleController extends Controller
{
    public function index()
    {
        return view('liro.users::backend.roles.index', [
            'roles' => UserRole::all(),
            'users' => User::all(),
            'routes' => UserRoleRoute::all()
        ]);
    }

    public function create()
    {
        return view('liro.users::backend.roles.create', [
            'user' => new User
        ]);
    }

    public function store()
    {
        dd('store');
    }

    public function edit($id)
    {
        return view('liro.users::backend.roles.edit', [
            'role' => UserRole::find($id),
            'routes' => app('menus')->getRouteNames()
        ]);
    }

    public function update(Request $request, $id)
    {
        dd('update');
    }

    public function delete($id)
    {
        dd('delete');
    }

}
