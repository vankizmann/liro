<?php

namespace Liro\Extension\Users\Models;

use Illuminate\Foundation\Auth\User as Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Liro\Extension\Users\Database\Traits\DepthGuardTrait;
use Liro\System\Database\Traits\CastableTrait;
use Liro\System\Database\Traits\DatatableTrait;
use Liro\System\Database\Traits\PaginatableTrait;

class User extends Model
{
    use CastableTrait, PaginatableTrait, DatatableTrait, DepthGuardTrait;

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

    public function skipGuardedBuilder($query)
    {
        $userId = Auth::getUserAttr('id', null);

        if ($userId !== null) {
            $query->orWhere('id', $userId);
        }

        return $query;
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_to_role', 'user_id', 'role_id');
    }

    public function getPoliciesAttribute()
    {
        return $this->roles()->get()->pluck('policies')->flatten(1);
    }

    public function getPolicyModulesAttribute()
    {
        return $this->policies->where('module', '!=', '')->pluck('module')->flatten(1);
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

    public function toVue()
    {
        return $this->append(['policy_modules']);
    }


}