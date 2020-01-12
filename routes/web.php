<?php

use Illuminate\Support\Facades\Route;
use Liro\Menu\Database\Menu;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('test', function () {
//    app('web.language')->setLocale('ru');

//    $menu = Menu::create([
//        'state' => 1,
//        'hide'  => 0,
//        'slug'  => ':domain/:locale/teeeeest',
//        'title' => 'TTTEEEST'
//    ]);
//
//    $menuLocale = $menu->localize('de')->fill([
//        'slug'  => ':domain/:locale/beispiel',
//        'title' => 'BEISPIEL'
//    ]);
//
//    $menuLocale->save();

//    dd((new Menu), $menu);

    dd(app('router'));

//    dd($menu, $menuLocale);
})->middleware('web');
