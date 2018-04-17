<?php

Route::middleware('auth')->group(function() {
    Route::get('/', 'Liro\Menu\Controller\MenuController@index')->name('menus.index');
    Route::get('create', 'Liro\Menu\Controller\MenuController@create')->name('menus.create');
    Route::post('create', 'Liro\Menu\Controller\MenuController@store')->name('menus.store');
    Route::get('{id}/edit', 'Liro\Menu\Controller\MenuController@edit')->name('menus.edit');
    Route::post('{id}/edit', 'Liro\Menu\Controller\MenuController@update')->name('menus.update');
    Route::post('{id}/clone', 'Liro\Menu\Controller\MenuController@update')->name('menus.clone');
});
