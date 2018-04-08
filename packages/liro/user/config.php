<?php

return [

    'name'      => 'User',
    'version'   => '0.0.1',
    'type'      => 'cms.package.backend.component',

    'register' => function($app) {

        $app['router']
            ->get('login', 'Liro\User\Controller\AuthenticateController@form')
            ->middleware(['web', 'guest'])->name('login');

        $app['router']
            ->post('login', 'Liro\User\Controller\AuthenticateController@login')
            ->middleware(['web', 'guest']);
            
        $app['router']
            ->get('logout', 'Liro\User\Controller\AuthenticateController@logout')
            ->middleware(['web', 'auth'])->name('logout');

    }

];