<?php

namespace Liro\Users\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Contracts\Foundation\Application;
use Liro\System\Modules\ModuleManager;
use Liro\System\Http\Controller;
use Liro\Users\Models\User;
use Liro\Users\Models\UserRole;

class UserController extends Controller
{
    public function index(Application $app, ModuleManager $modules)
    {
        return view('liro.users::backend.index', [
            'roles' => UserRole::all(),
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
