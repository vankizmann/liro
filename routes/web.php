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
    app('web.language')->setLocale('ru');
    global $test;
    $test = true;

    $menu = Menu::where('ident', 'web-home')->first()->fill(['title' => 'Foobar']);

    dd(app()->getLocale(), $menu, $menu->save());
    dd(Menu::with('translations')->first()->toArray());
})->middleware('web');
