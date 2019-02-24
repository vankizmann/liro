<?php

namespace Liro\Extension\Users\Database\Traits;

use Illuminate\Database\Eloquent\Builder;
use Liro\Extension\Users\Database\Scopes\GuardScope;

/**
 * Trait PolicyTrait
 *
 * @package Liro\Extension\Users
 */
trait GuardTrait
{
    /**
     * @var bool $useGuard
     */
    protected $useGuard = true;

    /**
     * @var string $guardColumn
     */
    protected $guardColumn = 'guard';

    public static function bootGuardTrait()
    {
        static::addGlobalScope(new GuardScope);
    }

    public function getUseGuard()
    {
        return $this->useGuard;
    }

    public function getGuardColumn()
    {
        return $this->guardColumn;
    }

    public function scopeDisableGuard(Builder $builder)
    {
        $this->useGuard = false;

        return $builder;
    }

    public function scopeEnableGuard(Builder $builder)
    {
        $this->useGuard = true;

        return $builder;
    }

}
