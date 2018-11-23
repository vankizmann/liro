<?php

namespace Liro\Users\Controllers;

use Illuminate\Http\Request;
use Liro\System\Users\Models\User;
use Liro\System\Users\Models\UserRole;
use Liro\Users\Requests\UserStoreRequest;
use Liro\Users\Requests\UserUpdateRequest;

class UserController extends \Liro\System\Http\Controller
{

    public function index(User $user, UserRole $role)
    {
        app('scripts')->addRoutes([
            'liro-users.user.index',
            'liro-users.user.create',
            'liro-users.user.edit'
        ]);

        app('scripts')->addMessages([
            'liro-users::module',
            'liro-users::form',
            'liro-users::message'
        ]);

        app('scripts')->setData(
            'users', $user->all()
        );

        app('scripts')->setData(
            'roles', $role->all()
        );

        return view('liro-users::user/index');
    }

    public function create(User $user, UserRole $role)
    {
        app('scripts')->addRoutes([
            'liro-users.user.index',
            'liro-users.user.create',
            'liro-users.user.edit'
        ]);

        app('scripts')->addMessages([
            'liro-users::module',
            'liro-users::form',
            'liro-users::message'
        ]);

        app('scripts')->setData(
            'user', $user
        );

        app('scripts')->setData(
            'roles', $role->all()
        );

        return view('liro-users::user/create');
    }

    public function store(UserStoreRequest $request, User $user)
    {
        $user = $user->create(
            $request->only(['state', 'name', 'email', 'password', 'role_ids'])
        );

        return response()->json([
            'user' => $user
        ]);
    }

    public function edit(User $user, UserRole $role)
    {
        app('scripts')->addRoutes([
            'liro-users.user.index',
            'liro-users.user.edit'
        ]);

        app('scripts')->addMessages([
            'liro-users::module',
            'liro-users::form',
            'liro-users::message'
        ]);

        app('scripts')->setData(
            'user', $user
        );

        app('scripts')->setData(
            'roles', $role->all()
        );

        return view('liro-users::user/edit');
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $user->update(
            $request->only(['state', 'name', 'email', 'password', 'role_ids'])
        );

        return response()->json([
            'user' => $user
        ]);
    }

}