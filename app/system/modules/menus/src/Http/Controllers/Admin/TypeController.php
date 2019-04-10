<?php

namespace Liro\Menus\Controllers\Admin;

use Liro\System\Http\Controller;
use Liro\Extension\Menus\Models\Domain;

class TypeController extends Controller
{

    public function __construct()
    {
        app('assets')->init('liro-menus');
    }

    public function index(Domain $type)
    {
        $locales = app('languages')->getLocalesArray();

        app('assets')->dataArray([
            'types' => $type->all(), 'locales' => $locales
        ]);

        return view('liro-menus::type/index');
    }

    public function create(Domain $type)
    {
        $locales = app('languages')->getLocalesArray();

        app('assets')->dataArray([
            'type' => $type, 'locales' => $locales
        ]);

        return view('liro-menus::type/create');
    }

    public function edit(Domain $type)
    {
        $locales = app('languages')->getLocalesArray();

        app('assets')->dataArray([
            'type' => $type, 'locales' => $locales
        ]);

        return view('liro-menus::type/edit');
    }

}
