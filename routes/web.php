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

    $menu = (new Menu)->where('ident', 'web-backend')->first()->fill([
        'slug'  => ':domain/:locale/system',
    ]);

    dd($menu->save(), $menu);
})->middleware('web');
