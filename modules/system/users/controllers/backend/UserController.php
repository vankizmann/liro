<?php

namespace System\Users\Controllers\Backend;

use Liro\App\Http\Controller;
use Illuminate\Http\Request;
use System\Users\Models\User;
use System\Users\Requests\UserStoreRequest;

class UserController extends Controller
{
    public function index()
    {
        return view('liro.users::backend.index', [
            'users' => User::all()
        ]);
    }

    public function create()
    {
        return view('liro.users::backend.create', [
            'user' => new User
        ]);
    }

    public function store(UserStoreRequest $request)
    {
        return response()->json([
            'message' => 'OK!'
        ]);
    }

    public function edit($id)
    {
        return view('liro.users::backend.edit', [
            'user' => User::find($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        return json([
            'message' => 'OK!'
        ]);
    }

}
