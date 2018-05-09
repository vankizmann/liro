<?php

namespace Liro\Users\Controllers\Backend;

use Illuminate\Support\Facades\App;
use Liro\Users\Models\User;
use Liro\Users\Models\UserRole;
use Liro\Users\Requests\UserStoreRequest;
use Liro\Users\Requests\UserUpdateRequest;

class UserController extends \Liro\System\Http\Controller
{
    public function index(User $users, UserRole $roles)
    {
        return view('liro-users::backend/users/index', [
            'users' => $users->all(), 'roles' => $roles->all()
        ]);
    }

    public function enable(User $user, $id)
    {
        $user->findOrFail($id)->update([ 'state' => 1 ]);
        return redirect()->route('liro-users.backend.users.index');
    }

    public function disable(User $user, $id)
    {
        $user->findOrFail($id)->update([ 'state' => 0 ]);
        return redirect()->route('liro-users.backend.users.index');
    }

    public function create(User $user, UserRole $roles)
    {
        return view('liro-users::backend/users/create', [
            'user' => $user, 'roles' => $roles->all()
        ]);
    }

    public function store(User $user, UserStoreRequest $request)
    {
        $user = $user->create($request->only([
            'state', 'name', 'email', 'password', 'role_ids'
        ]));

        return response()->json([
            'message' => trans('*.liro-users.messages.users.created'),
            'redirect' => $user->edit_route
        ]);
    }

    public function edit(User $user, UserRole $roles, $id)
    {
        return view('liro-users::backend/users/edit', [
            'user' => $user->findOrFail($id), 'roles' => $roles->all()
        ]);
    }

    public function update(User $user, UserUpdateRequest $request, $id)
    {
        $user->findOrFail($id)->update($request->only([
            'state', 'name', 'email', 'password', 'role_ids'
        ]));

        return response()->json([
            'message' => trans('*.liro-users.messages.users.updated')
        ]);
    }

    public function delete(User $user, $id)
    {
        dd('delete');
    }

}
