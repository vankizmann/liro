<?php

namespace Liro\Extension\Users\Http\Controllers\Ajax;

use Liro\System\Http\Controller;
use Liro\Extension\Users\Models\User;
use Liro\Extension\Users\Http\Requests\UserStoreRequest;
use Liro\Extension\Users\Http\Requests\UserUpdateRequest;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['ajax', 'guard']);
    }

    public function index(User $user)
    {
        return response()->json($user->all(), 200);
    }

    public function show(User $user)
    {
        return response()->json($user, 200);
    }

    public function store(UserStoreRequest $request, User $user)
    {
        $user = $user->create(
            $request->all()
        );

        return response()->json($user, 201);
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        if ( ! $request->input('password') ) {
            $request->offsetUnset('password');
        }

        $user->update(
            $request->all()
        );

        return response()->json($user, 200);
    }

}
