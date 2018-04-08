<?php

namespace Liro\Menu\Controller;

use Liro\Menu\Model\Menu;

class MenuController
{
    public function index()
    {
        return view('liro.menu.view.index', [
            'menus' => Menu::all()->toTree()
        ]);
    }

    public function create()
    {
        return view('liro.menu.view.create', [
            'menu' => new Menu
        ]);
    }

    public function show($id)
    {
        return view('liro.menu.view.show', [
            'menu' => Menu::find($id)
        ]);
    }

    public function edit()
    {
        return view('liro.menu.view.edit', [
            'menu' => Menu::find($id)
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

    public function fix()
    {
        Menu::fixTree();
        return redirect()->route('backend.menus.index')->with('success', 'menus.fixed');
    }

}