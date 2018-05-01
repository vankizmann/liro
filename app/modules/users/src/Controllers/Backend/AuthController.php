<?php

namespace Liro\Users\Controllers\Backend;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\Request;
use Liro\System\Http\Controller;

class AuthController extends Controller
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function login(Request $request)
    {
        return view('liro.users::backend.login');
    }

    public function submit(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if ( auth()->attempt($credentials) ) {
            return redirect('/de/backend/menus');
        }

        return redirect()->route('liro.users.backend.auth.login')->with('error', 'User with given credentials does not exists.');
    }

    public function logout(Request $request)
    {
        auth()->logout();

        return redirect()->route('liro.users.backend.auth.login');
    }

}
