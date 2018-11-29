<?php

namespace Liro\Languages\Controllers;

use Illuminate\Http\Request;
use Liro\System\Languages\Models\Language;
use Liro\Languages\Requests\LanguageStoreRequest;
use Liro\Languages\Requests\LanguageUpdateRequest;

class LanguageApiController extends \Liro\System\Http\Controller
{

    public function index(Language $language)
    {
        $response = $language->all();

        return response()->json($response);
    }

    public function show(Language $language)
    {
        return response()->json($language);
    }

    public function store(LanguageStoreRequest $request, Language $language)
    {
        $language = $language->create(
            $request->only(['state', 'title', 'locale', 'default'])
        );

        return response()->json($language);
    }

    public function update(LanguageUpdateRequest $request, Language $language)
    {
        $language->update(
            $request->only(['state', 'title', 'locale', 'default'])
        );

        return response()->json($language);
    }

    public function defaultEnable(Language $language)
    {
        $language->update([
            'default' => 1
        ]);

        return response()->json($language);
    }

    public function stateEnable(Language $language)
    {
        $language->update([
            'state' => 1
        ]);

        return response()->json($language);
    }

    public function stateDisable(Language $language)
    {
        $language->update([
            'state' => 0
        ]);

        return response()->json($language);
    }

    public function hideEnable(Language $language)
    {
        $language->update([
            'hide' => 1
        ]);

        return response()->json($language);
    }

    public function hideDisable(Language $language)
    {
        $language->update([
            'hide' => 0
        ]);

        return response()->json($language);
    }

}