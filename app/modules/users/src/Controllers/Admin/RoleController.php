<?php

namespace Liro\Users\Controllers\Admin;

use Illuminate\Http\Request;
use Liro\System\Users\Models\UserRole;
use Liro\Users\Requests\RoleStoreRequest;
use Liro\Users\Requests\RoleUpdateRequest;

class RoleController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->module('liro-users');
    }

    public function index(UserRole $role)
    {
        app('assets')->dataArray([
            'roles' => $role->all()
        ]);

        return view('liro-users::role/index');
    }

    public function create(UserRole $role)
    {
        $modules = app('menus')->getModuleNames(['ajax', 'admin', 'user']);

        app('assets')->dataArray([
            'modules' => $modules, 'role' => $role
        ]);

        return view('liro-users::role/create');
    }

    public function edit(UserRole $role)
    {
        $modules = app('menus')->getModuleNames(['ajax', 'admin', 'user']);

        app('assets')->dataArray([
            'modules' => $modules, 'role' => $role
        ]);

        return view('liro-users::role/edit');
    }

}