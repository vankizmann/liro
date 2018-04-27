<?php

$installer = env('ROUTER_INSTALLER', 'installer');

if ( $request->segment(2) != $installer ) {
    return;
}

dd('installer');