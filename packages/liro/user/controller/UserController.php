<?php

namespace Liro\User\Controller;

use Liro\User\Model\User;

class UserController
{
    public function index()
    {
        return view('liro.user.view.index', [
            'users' => User::all()
        ]);
    }

    public function create()
    {
        return view('liro.user.view.create', [
            'user' => new User
        ]);
    }

    public function show($id)
    {
        return view('liro.user.view.show', [
            'user' => User::find($id)
        ]);
    }

    public function edit($id)
    {
        return view('liro.user.view.edit', [
            'user' => User::find($id)
        ]);
    }

    public function store($id)
    {
        dd('store');
    }

    public function update()
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