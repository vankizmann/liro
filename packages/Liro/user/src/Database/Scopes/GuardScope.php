<?php

namespace Liro\User\Database\Scopes;

use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class GuardScope implements Scope
{

    public function apply(Builder $builder, Model $model)
    {
        $modelClass = get_class($model);

        if ( $model->getUseDepthGuard() ) {

            $guardDepth = app('web.user')
                ->getPolicyDepth($modelClass);

            $userId = app('web.user')
                ->getUser('uuid', null);

            $builder->where(function ($query) use ($model, $guardDepth, $userId) {

                if ( method_exists($model, 'skipGuardedBuilder') ) {
                    $query = $model->skipGuardedBuilder($query);
                }

                $query
                    ->orWhere($model->getDepthGuardColumn(), '>=', $guardDepth)
                    ->orWhere($model->getDepthGuardColumn(), '=', 0);
            });
        }

        return $builder;
    }

}