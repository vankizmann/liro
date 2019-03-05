<?php

namespace Liro\Extension\Users\Http\Controllers\Admin;

use Liro\Extension\Users\Models\Role;

class RoleController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        $this->middleware(['web', 'guard']);
    }

    public function index(Role $role)
    {
        app('assets')->dataArray([
            'roles' => $role->all()
        ]);

        return view('liro-users::role/index');
    }

    public function create(Role $role)
    {
        $modules = app('menus')->getModuleNames(['ajax', 'admin', 'user']);

        app('assets')->dataArray([
            'modules' => $modules, 'role' => $role
        ]);

        return view('liro-users::role/create');
    }

    public function edit(Role $role)
    {
        $modules = app('menus')->getModuleNames(['ajax', 'admin', 'user']);

        app('assets')->dataArray([
            'modules' => $modules, 'role' => $role
        ]);

        return view('liro-users::role/edit');
    }

}
