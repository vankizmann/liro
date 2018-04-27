<?php

if ( $request->segment(2) == $installer || $request->segment(2) == $backend ) {
    return;
}

dd('frontend');