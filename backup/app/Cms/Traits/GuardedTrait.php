<?php

namespace Liro\System\Cms\Traits;

trait GuardedTrait
{
    protected $guarded = false;

    public function isGuarded()
    {
        return $this->guarded === true;
    }

    public function isNotGuarded()
    {
        return $this->guarded === false;
    }

    public function disableGuarded()
    {
        $this->guarded = false;
    }

    public function enableGuarded()
    {
        $this->guarded = true;
    }

    public function unguarded($callback)
    {
        $guarded = $this->guarded;
        $this->guarded = false;
        $result = app()->call($callback);
        $this->guarded = $guarded;

        return $result;
    }

    public function guarded($callback)
    {
        $guarded = $this->guarded;
        $this->guarded = true;
        $result = app()->call($callback);
        $this->guarded = $guarded;

        return $result;
    }
}
