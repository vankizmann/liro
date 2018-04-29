<?php

namespace Liro\Users\Controllers;

use Illuminate\Http\Request;
use Liro\Users\Models\User;

class BackendAuthController
{

    public function login(Request $request)
    {
        return view('liro.users::backend.login');
    }

}
