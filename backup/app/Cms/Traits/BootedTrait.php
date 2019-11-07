<?php

namespace Liro\System\Cms\Traits;

trait BootedTrait
{
    public $booted = false;

    public $bootedCallbacks = [];

    public function isBooted()
    {
        return $this->booted === true;
    }

    public function isNotBooted()
    {
        return $this->booted === false;
    }

    public function booted($callback)
    {
        if ( $this->isBooted() ) {
            return app()->call($callback);
        }

        $this->bootedCallbacks[] = $callback;
    }

    public function bootInstance()
    {
        if ( $this->isBooted() ) {
            return;
        }

        foreach ( $this->bootedCallbacks as $key => $callback ) {
            app()->call($callback);
        }

        $this->booted = true;
    }
}
