<?php

Route::middleware(['web', 'auth'])->group(function() {
    // Route::get('menus/fix', 'Liro\Menu\Controller\MenuController@fix');
    Route::resource('menus', 'Liro\Menu\Controller\MenuController');
});
