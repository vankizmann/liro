<?php

namespace Liro\Extension\Users\Models;

use Illuminate\Foundation\Auth\User as Model;
use Illuminate\Support\Facades\Hash;
use Liro\System\Database\Traits\CastableTrait;

class User extends Model
{
    use CastableTrait;

    protected $table = 'users';

    protected $guarded = [
        'id',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = [
        'role_ids'
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

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }

    public function getRoleIdsAttribute()
    {
        return $this->roles()->get()->pluck('id')->flatten(1);
    }

    public function setRoleIdsAttribute($value)
    {
        $this->saved(function ($model) use ($value) {
            $model->roles()->sync($value);
        });
    }

    public function setPasswordConfirmAttribute()
    {
        return;
    }


}
