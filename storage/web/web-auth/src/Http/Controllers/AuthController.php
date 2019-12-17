<?php

namespace Liro\Web\Auth\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware(['web']);
    }

    public function postLoginRoute()
    {
        $data = request()->only([
            'email', 'password', 'remember'
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
