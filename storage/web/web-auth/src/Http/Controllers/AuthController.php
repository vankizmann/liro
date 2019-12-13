<?php

namespace Liro\Web\Auth\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Database\User;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware(['web']);
    }

    public function getLoginRoute()
    {
        dd(app('router'));
    }

    public function postLoginRoute()
    {
        $data = request()->only([
            'email', 'password', 'remember'
        ]);

        if ( ! Auth::attempt($data) ) {
            abort(401, trans('E-Mail or Password does not match'));
        }

        return response()->json(Auth::user());
    }

}
