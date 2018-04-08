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

Route::get('/migrate', function() {

    try {
        Artisan::call('migrate');
    }
    catch(Exception $e){
        return new Exception($e->getMessage());
    }

    return 'OK!';
});

Route::get('/migrate/rollback', function() {

    try {
        Artisan::call('migrate:rollback');
    }
    catch(Exception $e){
        return new Exception($e->getMessage());
    }

    return 'OK!';
});

Route::get('/migrate/refresh', function() {

    try {
        Artisan::call('migrate:refresh');
    }
    catch(Exception $e){
        return new Exception($e->getMessage());
    }

    return 'OK!';
});

Route::get('/migrate/reset', function() {

    try {
        Artisan::call('migrate:reset');
    }
    catch(Exception $e){
        return new Exception($e->getMessage());
    }

    return 'OK!';
});

Route::get('/seed', function() {

    try {
        Artisan::call('db:seed');
    }
    catch(Exception $e){
        return new Exception($e->getMessage());
    }

    return 'OK!';
});

$backend = new Lirox\System\Factory\BackendFactory;

Route::prefix('backend')->group(function($app) use ($backend) {
    Route::group($backend->config, function($app) use ($backend) {
        $backend->boot($app);
    });
});

$frontend = new Lirox\System\Factory\FrontendFactory;

Route::group($frontend->config, function($app) use ($frontend) {
    $frontend->boot($app);
});

// Route::group([], function($app) use ($frontend) {
//     $frontend->boot($app);
// });




// Route::all('/backend/{lang?}/{route?}', 'Lirox\Factory\Backend@boot')->where('lang', '[a-z]{2,}')->where('route', '.*')->name('backend');
// Route::all('/{lang?}/{route?}', 'Lirox\Factory\Frontend@boot')->where('lang', '[a-z]{2,}')->where('route', '.*')->name('frontend');