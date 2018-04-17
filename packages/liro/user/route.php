<?php

Route::middleware('auth')->group(function() {
    Route::get('/', 'Liro\User\Controller\UserController@index')->name('users.index');
    Route::get('create', 'Liro\User\Controller\UserController@create')->name('users.create');
    Route::post('create', 'Liro\User\Controller\UserController@store')->name('users.store');
    Route::get('{id}/edit', 'Liro\User\Controller\UserController@edit')->name('users.edit');
    Route::post('{id}/edit', 'Liro\User\Controller\UserController@update')->name('users.update');
    Route::post('{id}/clone', 'Liro\User\Controller\UserController@update')->name('users.clone');
});
