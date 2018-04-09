<?php

Route::get('/', 'Liro\User\Controller\UserController@index')->name('index');
Route::get('create', 'Liro\User\Controller\UserController@create')->name('create');
Route::post('create', 'Liro\User\Controller\UserController@store')->name('store');
Route::get('{id}/edit', 'Liro\User\Controller\UserController@edit')->name('edit');
Route::post('{id}/edit', 'Liro\User\Controller\UserController@update')->name('update');
Route::post('{id}/clone', 'Liro\User\Controller\UserController@update')->name('clone');
