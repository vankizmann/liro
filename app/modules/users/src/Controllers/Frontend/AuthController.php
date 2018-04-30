<?php

namespace Liro\Users\Controllers\Frontend;

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
        return view('liro.users::frontend.login');
    }

    public function submit(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if ( auth()->attempt($credentials) ) {
            return redirect('/de/frontend/menus');
        }

        return redirect()->route('frontend.users.login')->with('error', 'User with given credentials does not exists.');
    }

    public function logout(Request $request)
    {
        auth()->logout();

        return redirect()->route('frontend.users.login');
    }

}
