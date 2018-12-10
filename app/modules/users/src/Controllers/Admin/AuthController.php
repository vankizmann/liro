<?php

namespace Liro\Users\Controllers\Admin;

use Illuminate\Support\Facades\Auth;
use Liro\System\Exceptions\Exception;
use Liro\Users\Requests\AuthSubmitRequest;

class AuthController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->module('liro-users');
    }

    public function login()
    {
        return view('liro-users::auth/login');
    }

    public function reset()
    {
        return view('liro-users::auth/reset');
    }

    public function logout()
    {
        app('users')->logoutUser();
        return redirect()->route('liro-users.admin.auth.login');
    }

}