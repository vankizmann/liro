<?php

namespace Liro\System\Cms\Traits;

trait BootedTrait
{
    public $booted = false;

    public function isBooted()
    {
        return $this->booted === true;
    }

    public function isNotBooted()
    {
        return $this->booted === false;
    }
}
