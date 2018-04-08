<?php

Route::middleware(['web', 'auth'])->group(function() {
    Route::resource('languages', 'Liro\Language\Controller\LanguageController');
});
