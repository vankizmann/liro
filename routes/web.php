<?php

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

use App\Database\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('test', function () {


//    dd(app('web.language')->getLocales(), app()->getLocale());


//    app('web.user')->unguarded(function () {
//        Auth::login(User::first());
//    });

//    dd(Auth::guest());
//
//
    dd(app('web.user')->getUser(), app('web.user')->isGuarded());
    return view('demo');

    app('web.assets')->script('web-foobar1', 'web-page::foobar1.js', ['web-foobar3']);
    app('web.assets')->script('web-foobar2', 'web-page::foobar2.js');
    app('web.assets')->script('web-foobar3', 'web-page::foobar3.js');

    return dd(app('web.assets')->output(), asset('web-page::foobar1.js'));
})->middleware('web');
