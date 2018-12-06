<?php

namespace Liro\Users\Controllers;

use Illuminate\Http\Request;
use Liro\System\Users\Models\User;
use Liro\System\Users\Models\UserRole;
use Liro\Users\Requests\UserStoreRequest;
use Liro\Users\Requests\UserUpdateRequest;

class UserController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->module('liro-users');
    }

    public function index(User $user, UserRole $role)
    {
        return view('liro-users::user/index');
    }

    public function create(User $user, UserRole $role)
    {
        app('assets')->data(
            'user', $user
        );

        app('assets')->data(
            'roles', $role->all()
        );

        return view('liro-users::user/create');
    }

    public function store(UserStoreRequest $request, User $user)
    {
        $user = $user->create(
            $request->all()
        );

        return response()->json([
            'user' => $user
        ], 201);
    }

    public function edit(User $user, UserRole $role)
    {
        app('assets')->data(
            'user', $user
        );

        app('assets')->data(
            'roles', $role->all()
        );

        return view('liro-users::user/edit');
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $user->update(
            $request->all()
        );

        return response()->json([
            'user' => $user
        ], 200);
    }

}