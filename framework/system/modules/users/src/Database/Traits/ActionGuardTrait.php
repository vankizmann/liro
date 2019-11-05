<?php

namespace Liro\Extension\Users\Database\Traits;

use Illuminate\Database\Eloquent\Builder;
use Liro\Extension\Users\Database\Observers\GuardObserver;

/**
 * Trait ActionGuardTrait
 *
 * @package Liro\Extension\Users
 */
trait ActionGuardTrait
{
    /**
     * @var bool $useGuard
     */
    protected $useActionGuard = true;

    public static function bootActionGuardTrait()
    {
        static::observe(new GuardObserver);
    }

    public function getUseActionGuard()
    {
        return app('cms')->isGuarded() && $this->useActionGuard;
    }

    public function disableActionGuard()
    {
        $this->useActionGuard = false;
        return $this;
    }

    public function enableActionGuard()
    {
        $this->useActionGuard = true;
        return $this;
    }

    public function scopeWithoutActionGuard(Builder $builder)
    {
        $model = $builder->getModel()->disableActionGuard();
        return $builder->setModel($model);
    }

    public function scopeWithActionGuard(Builder $builder)
    {
        $model = $builder->getModel()->enableActionGuard();
        return $builder->setModel($model);
    }

}
