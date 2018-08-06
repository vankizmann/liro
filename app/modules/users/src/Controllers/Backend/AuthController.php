<?php

namespace Liro\Users\Controllers\Backend;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\Request;

class AuthController extends \Liro\System\Http\Controller
{
    protected $app;

    public function login(Request $request)
    {
        return view('liro-users::backend/login');
    }

    public function submit(Request $request)
    {
        $credentials = array_merge(['state' => 1], $request->only(['email', 'password']));

        if ( auth()->attempt($credentials) ) {
            return redirect()->route('liro-dashboard.backend.dashboard.index');
        }

        return redirect()->route('liro-users.backend.auth.login')->with('error', 'User with given credentials does not exists.');
    }

    public function logout(Request $request)
    {
        auth()->logout();

        return redirect()->route('liro-users.backend.auth.login');
    }

}
