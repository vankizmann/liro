<?php

namespace Liro\Web\Auth\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Liro\Web\Auth\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware(['web']);
    }

    public function postLoginRoute(LoginRequest $request)
    {
        $data = $request->only([
            'email', 'password'
        ]);

        if ( ! Auth::attempt($data) ) {
            abort(401, trans('Invalid email or password.'));
        }

        return response()->json(Auth::user());
    }

    public function postLogoutRoute()
    {
        Auth::logout();

        return response()->json(['redirect' => url('/')]);
    }

    public function getUserRoute()
    {
        return response()->json(Auth::user());
    }

}
