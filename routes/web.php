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

    $menu = (new Menu)->fill([
        '_locale' => 'da',
        'id'    => "a0ca2fab-cae6-438d-b75b-cf504810920f",
        'type'  => 'web-test::test',
        'title' => 'Foobar',
        'slug'  => '/foobar',
        'state' => 1,
        'hide'  => 0,
    ]);

    dd(app()->getLocale(), $menu->save(), $menu);
})->middleware('web');
