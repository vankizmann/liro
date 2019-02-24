<?php

namespace Liro\Extension\Users\Database\Scopes;

use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class GuardScope implements Scope
{

    public function apply(Builder $builder, Model $model)
    {
        if ( app('cms')->isBooted() === false ) {
            // Return if query guard is disabled
            return;
        }

        if ( $model->getUseGuard() === false ) {
            // Return if query guard is disabled
            return;
        }

        // Get column name for policy
        $column = $model->getGuardColumn();

        // Get lowest depth from user policies
        $depth = app('auth')->getPolicyDepth(self::class);

        // Accept if policy depth is higher then model depth or is null
        $builder->where($column, '>', $depth)->orWhere($column, '=', 0);
    }

}
