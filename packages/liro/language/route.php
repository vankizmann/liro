<?php

Route::middleware('auth')->group(function() {
    Route::get('/', 'Liro\Language\Controller\LanguageController@index')->name('languages.index');
    Route::get('create', 'Liro\Language\Controller\LanguageController@create')->name('languages.create');
    Route::post('create', 'Liro\Language\Controller\LanguageController@store')->name('languages.store');
    Route::get('{id}/edit', 'Liro\Language\Controller\LanguageController@edit')->name('languages.edit');
    Route::post('{id}/edit', 'Liro\Language\Controller\LanguageController@update')->name('languages.update');
    Route::post('{id}/clone', 'Liro\Language\Controller\LanguageController@update')->name('languages.clone');
});

