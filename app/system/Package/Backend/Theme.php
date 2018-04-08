<?php

namespace App\Package\Backend;

class Theme extends Package
{

    public function setTemplate()
    {
        $this->app['view']->addNamespace('theme', $this->directory.'/view');
        return $this;
    }

}