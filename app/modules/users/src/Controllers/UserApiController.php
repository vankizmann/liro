<?php

namespace Liro\Users\Controllers;

use Illuminate\Http\Request;
use Liro\System\Users\Models\User;
use Liro\Users\Requests\UserStoreRequest;
use Liro\Users\Requests\UserUpdateRequest;

class UserApiController extends \Liro\System\Http\Controller
{

    public function index(User $user)
    {
        $response = $user->all();

        return response()->json($response, 200);
    }

    public function show(User $user)
    {
        return response()->json($user, 200);
    }

    public function store(UserStoreRequest $request, User $user)
    {
        $response = $user->create(
            $request->all()
        );

        return response()->json($response, 201);
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $user->update(
            $request->all()
        );

        return response()->json($user, 200);
    }

}