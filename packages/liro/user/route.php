<?php

Route::middleware(['web', 'auth'])->group(function() {
    Route::resource('users', 'Liro\User\Controller\UserController');
});
