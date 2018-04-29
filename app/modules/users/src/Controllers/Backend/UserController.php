<?php

namespace Liro\Users\Controllers\Backend;

use Illuminate\Http\Request;
use Liro\System\Http\Controller;
use Liro\Users\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return view('liro.users::backend.index', [
            'users' => User::all()
        ]);
    }

    public function show($id)
    {
        return view('liro.users::backend.show', [
            'user' => User::find($id)
        ]);
    }

    public function create()
    {
        return view('liro.users::backend.create', [
            'user' => new User
        ]);
    }

    public function store()
    {
        dd('store');
    }

    public function edit($id)
    {
        return view('liro.users::backend.edit', [
            'user' => User::find($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        dd('update');
    }

    public function delete($id)
    {
        dd('delete');
    }

    public function clone($id)
    {
        dd('clone');
    }

}
