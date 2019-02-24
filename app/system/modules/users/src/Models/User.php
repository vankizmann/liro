<?php

namespace Liro\Extension\Users\Models;

use Liro\Extension\Users\Database\Traits\GuardTrait;
use Liro\System\Database\Traits\CastableTrait;

class User extends \Illuminate\Foundation\Auth\User
{
    use CastableTrait, GuardTrait;

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
        return $this->roles()->with('policies')->get()->pluck('policies')->flatten(1);
    }

    public function getPolicyDepth($class)
    {
        return $this->policies->where('class', $class)->where('method', '')->pluck('depth')->min();
    }

    public function hasPolicyAction($class, $method)
    {
        return $this->policies->where('class', $class)->whereIn('method', ['*', $method])->isNotEmpty();
    }


}
