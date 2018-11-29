<?php

namespace Liro\Languages\Controllers;

use Illuminate\Http\Request;
use Liro\System\Languages\Models\Language;
use Liro\Languages\Requests\LanguageStoreRequest;
use Liro\Languages\Requests\LanguageUpdateRequest;

class LanguageController extends \Liro\System\Http\Controller
{

    public function index(Language $language)
    {
        app('scripts')->addRoutes([
            'liro-languages.language.index',
            'liro-languages.language.create',
            'liro-languages.language.edit'
        ]);

        app('scripts')->addMessages([
            'liro-languages::module',
            'liro-languages::form',
            'liro-languages::message'
        ]);

        app('scripts')->setData(
            'languages', $language->all()
        );

        return view('liro-languages::language/index');
    }

    public function create(Language $language)
    {
        app('scripts')->addRoutes([
            'liro-languages.language.index',
            'liro-languages.language.create',
            'liro-languages.language.edit'
        ]);

        app('scripts')->addMessages([
            'liro-languages::module',
            'liro-languages::form',
            'liro-languages::message'
        ]);

        app('scripts')->setData(
            'language', $language
        );

        return view('liro-languages::language/create');
    }

    public function store(LanguageStoreRequest $request, Language $language)
    {
        $language = $language->create(
            $request->only(['state', 'title', 'locale', 'default'])
        );

        return response()->json([
            'language' => $language
        ]);
    }

    public function edit(Language $language)
    {
        app('scripts')->addRoutes([
            'liro-languages.language.index',
            'liro-languages.language.edit'
        ]);

        app('scripts')->addMessages([
            'liro-languages::module',
            'liro-languages::form',
            'liro-languages::message'
        ]);

        app('scripts')->setData(
            'language', $language
        );

        return view('liro-languages::language/edit');
    }

    public function update(LanguageUpdateRequest $request, Language $language)
    {
        $language->update(
            $request->only(['state', 'title', 'locale', 'default'])
        );

        return response()->json([
            'language' => $language
        ]);
    }

}