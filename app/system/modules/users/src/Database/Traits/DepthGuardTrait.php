<?php

namespace Liro\Extension\Users\Database\Traits;

use Illuminate\Database\Eloquent\Builder;
use Liro\Extension\Users\Database\Scopes\GuardScope;

/**
 * Trait PolicyTrait
 *
 * @package Liro\Extension\Users
 */
trait DepthGuardTrait
{
    /**
     * @var bool $useGuard
     */
    protected $useDepthGuard = true;

    /**
     * @var string $guardColumn
     */
    protected $depthGuardColumn = 'guard';

    public static function bootDepthGuardTrait()
    {
        static::addGlobalScope(new GuardScope);
    }

    public function getUseDepthGuard()
    {
        return app('cms')->isGuarded() && $this->useDepthGuard;
    }

    public function getDepthGuardColumn()
    {
        return $this->depthGuardColumn;
    }

    public function disableDepthGuard()
    {
        $this->useDepthGuard = false;
        return $this;
    }

    public function enableDepthGuard()
    {
        $this->useDepthGuard = true;
        return $this;
    }

    public function scopeWithoutDepthGuard(Builder $builder)
    {
        $model = $builder->getModel()->disableDepthGuard();
        return $builder->setModel($model);
    }

    public function scopeWithDepthGuard(Builder $builder)
    {
        $model = $builder->getModel()->enableDepthGuard();
        return $builder->setModel($model);
    }

}
