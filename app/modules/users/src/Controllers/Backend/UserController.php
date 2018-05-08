<?php

namespace Liro\Users\Controllers\Backend;

use Illuminate\Http\Request;
use Liro\System\Http\Controller;
use Liro\Users\Models\User;
use Liro\Users\Models\UserRole;

class UserController extends Controller
{
    public function index()
    {
        return view('liro.users::backend.users.index', [
            'roles' => UserRole::all(),
            'users' => User::all()
        ]);
    }

    public function show($id)
    {
        return view('liro.users::backend.users.show', [
            'user' => User::find($id)
        ]);
    }

    public function create()
    {
        return view('liro.users::backend.users.create', [
            'user' => new User
        ]);
    }

    public function store()
    {
        dd('store');
    }

    public function edit($id)
    {
        return view('liro.users::backend.users.edit', [
            'user' => User::find($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        dd('update');
    }

    public function enable($id)
    {
        $user = User::findOrFail($id)->fill([ 'state' => 1 ])->save();
        return redirect()->route('liro.users.backend.users.index');
    }

    public function disable($id)
    {
        $user = User::findOrFail($id)->fill([ 'state' => 0 ])->save();
        return redirect()->route('liro.users.backend.users.index');
    }

    public function delete($id)
    {
        dd('delete');
    }

}
