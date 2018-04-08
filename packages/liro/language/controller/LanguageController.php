<?php

namespace Liro\Language\Controller;

use Liro\Language\Model\Language;

class LanguageController
{
    public function index()
    {
        return view('liro.language.view.index', [
            'languages' => Language::all()
        ]);
    }

    public function create()
    {
        return view('liro.language.view.create', [
            'language' => new Language
        ]);
    }

    public function show($id)
    {
        return view('liro.language.view.show', [
            'language' => Language::find($id)
        ]);
    }

    public function edit()
    {
        return view('liro.language.view.edit', [
            'language' => Language::find($id)
        ]);
    }

    public function store()
    {

    }

    public function update()
    {

    }

    public function delete()
    {

    }

}