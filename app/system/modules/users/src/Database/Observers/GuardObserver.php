<?php

namespace Liro\Extension\Users\Database\Observers;

use Illuminate\Database\Eloquent\Model;
use Liro\Extension\Policies\Exceptions\PolicyException;

class GuardObserver
{

    public function creating(Model $model)
    {
        if ( $model->getUseActionGuard() && app('auth')->hasPolicyAction(self::class, 'create') ) {
            throw new PolicyException('Access to ' . self::class . '@create not granted.');
        }

        return;
    }

    public function updating(Model $model)
    {
        if ( $model->getUseActionGuard() && app('auth')->hasPolicyAction(self::class, 'update') ) {
            throw new PolicyException('Access to ' . self::class . '@update not granted.');
        }

        return;
    }

    public function deleting(Model $model)
    {
        if ( $model->getUseActionGuard() && app('auth')->hasPolicyAction(self::class, 'delete') ) {
            throw new PolicyException('Access to ' . self::class . '@delete not granted.');
        }

        return;
    }

}
