<?php

namespace Liro\User\Database;

use Illuminate\Foundation\Auth\User as Model;
use Illuminate\Support\Facades\Hash;
use Liro\Support\Database\Traits\Castable;
use Liro\Support\Database\Traits\Datatable;
use Liro\Support\Database\Traits\Paginatable;

class User extends Model
{
    use Castable, Paginatable, Datatable, Traits\DepthGuarded;

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'uuid';

    /**
     * The "type" of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    protected $table = 'users';

    protected $guarded = [
        'uuid',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = [
        'role_ids'
    ];

    protected $attributes = [
        'uuid'    => null,
        'state'    => null,
        'name'     => null,
        'email'    => null,
        'password' => null,
        'guard'    => null,
    ];

    protected $casts = [
        'uuid'     => 'uuid',
        'state'    => 'integer',
        'name'     => 'string',
        'email'    => 'string',
        'password' => 'string',
        'guard'    => 'integer',
    ];

    public function skipGuardedBuilder($query)
    {
        $userId = app('web.user')->getUser('uuid', null);

        if ($userId !== null) {
            $query->orWhere('uuid', $userId);
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
        return $this->roles()->get()->pluck('uuid')->flatten(1);
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
