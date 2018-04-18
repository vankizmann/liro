<?php

namespace Liro\User\Controller;

use App\Http\Controller;
use Illuminate\Http\Request;
use Liro\User\Model\User;

class UserController extends Controller
{
    public function index()
    {
        return view('liro.user::index', [
            'users' => User::all()
        ]);
    }

    public function show($id)
    {
        return view('liro.user::show', [
            'user' => User::find($id)
        ]);
    }

    public function create()
    {
        return view('liro.user::create', [
            'user' => new User
        ]);
    }

    public function store()
    {
        // Get response from request
        $form = request()->all();

        // Create new user
        $user = User::create($form);

        return response()->json([
            'message' => trans('*.user.message.stored'),
            'redirect' => route('users.edit', $user->id)
        ]);
    }

    public function edit($id)
    {
        return view('liro.user::edit', [
            'user' => User::find($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        if ( ! $request->password ) {
            $request->offsetUnset('password');
        }

        // Get response from request
        $form = $request->all();

        // Update user
        $user = User::find($id)->fill($form)->save();

        return response()->json([
            'message' => trans('*.user.message.updated')
        ]);
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