<?php

namespace Liro\System\Cms\Traits;

trait GuardedTrait
{
    public $guarded = true;

    public function isGuarded()
    {
        return $this->guarded === true;
    }

    public function isNotGuarded()
    {
        return $this->guarded === false;
    }

    public function unguarded($callback)
    {
        $guarded = $this->guarded;
        $this->guarded = false;
        app()->call($callback);
        $this->guarded = $guarded;

        return $this;
    }

    public function guarded($callback)
    {
        $guarded = $this->guarded;
        $this->guarded = true;
        app()->call($callback);
        $this->guarded = $guarded;

        return $this;
    }
}
