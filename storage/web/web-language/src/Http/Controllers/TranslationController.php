<?php

namespace Liro\Web\Language\Http\Controllers;

use App\Database\Translation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TranslationController extends Controller
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware(['web']);
    }

    public function getIndexRoute()
    {
        $menus = Translation::datatable();

        return response()->json($menus);
    }

    public function getCreateRoute()
    {
        $menu = new Translation;

        return response()->json($menu);
    }

    public function postStoreRoute()
    {
        $menu = new Translation;

        return response()->json($menu);
    }

    public function getEditRoute($id)
    {
        $menu = Translation::findOrFail($id);

        return response()->json([
            'data' => $menu->toArray()
        ]);
    }

    public function postUpdateRoute(Request $request, $id)
    {
        $menu = Translation::findOrFail($id);

        $menu->fill($request->input())->save();

        return response()->json([
            'data' => $menu, 'message' => trans('Translation has been updated!')
        ]);
    }

    public function postDeleteRoute()
    {
        foreach ( request()->input('ids', []) as $id ) {
            Translation::findOrFail($id)->delete();
        }

        return response()->json([
            'data' => [], 'message' => trans('Translations has been deleted!')
        ]);
    }

}
