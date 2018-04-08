<?php

namespace App\Package\Backend;

class Component extends Package
{
    
    public function loadRoute()
    {
        $routePath = $this->directory.'/route.php';

        if ( file_exists($routePath) ) {
            require $routePath;
        }

        return $this;
    }

}