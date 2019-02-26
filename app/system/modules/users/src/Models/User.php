<?php

namespace Liro\Extension\Users\Models;

use Illuminate\Foundation\Auth\User as Model;
use Liro\Extension\Users\Database\Traits\ActionGuardTrait;
use Liro\System\Database\Traits\CastableTrait;

class User extends Model
{
    use CastableTrait, ActionGuardTrait;

    protected $table = 'users';

    protected $guarded = [
        'id',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $attributes = [
        'state'    => null,
        'name'     => null,
        'email'    => null,
        'password' => null,
        'guard'    => null,
    ];

    protected $casts = [
        'state'    => 'integer',
        'name'     => 'string',
        'email'    => 'string',
        'password' => 'string',
        'guard'    => 'integer',
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_to_role', 'user_id', 'role_id');
    }

    public function getPoliciesAttribute()
    {
        return $this->roles()->get()->pluck('policies')->flatten(1);
    }

    public function getPolicyDepth($class)
    {
        return $this->policies->where('class', $class)
            ->where('method', '')->pluck('depth')->min() ?: 0;
    }

    public function hasPolicyAction($class, $method)
    {
        return $this->policies->where('class', $class)
            ->whereIn('method', ['*', $method])->isNotEmpty() ?: false;
    }


}
