<?php

namespace Liro\Extension\Users\Http\Controllers\Admin;

use Liro\System\Http\Controller;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function login()
    {
        app('cms')->unguarded(function () {
            auth()->attempt(['email' => 'admin@gmail.com', 'password' => 'password']);
        });

        return 'Ok';

        return view('liro-users::auth/login');
    }

    public function logout()
    {
//        auth()->logout();
        return redirect()->route('liro-users.admin.auth.login');
    }

}
