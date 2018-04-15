<?php

return [

    'name'      => 'Database',
    'version'   => '0.0.1',
    'type'      => 'cms.package.installer.package',

    'register' => function($app) {

        $db = $app['db'];
        $schema = $db->getSchemaBuilder();
        
        include('migrations/Languages.php');
        include('migrations/Packages.php');
        include('migrations/Users.php');
        include('migrations/Menus.php');
    }

];