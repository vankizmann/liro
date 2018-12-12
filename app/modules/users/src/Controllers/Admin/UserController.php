<?php

namespace Liro\Users\Controllers\Admin;

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
        app('assets')->dataArray([
            'users' => $user->all(), 'roles' => $role->all()
        ]);

        return view('liro-users::user/index');
    }

    public function create(User $user, UserRole $role)
    {
        $user->fill([
            'password' => '',
            'password_confirm' => ''
        ]);

        // $user->password = '';

        app('assets')->dataArray([
            'user' => $user, 'roles' => $role->all()
        ]);

        return view('liro-users::user/create');
    }

    public function edit(User $user, UserRole $role)
    {
        app('assets')->dataArray([
            'user' => $user, 'roles' => $role->all()
        ]);

        return view('liro-users::user/edit');
    }

}