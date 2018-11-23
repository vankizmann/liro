<?php
namespace Liro\System\Users\Models;

use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Liro\System\Database\Castable;
use Liro\System\Users\Models\UserRole;
use Liro\System\Fields\Helpers\FieldHelper;

class User extends \Illuminate\Foundation\Auth\User
{
    use Notifiable;
    use Castable;

    protected $table = 'users';

    protected $appends = [
        'role_ids'
    ];

    protected $fillable = [
        'state', 'lock', 'name', 'email', 'password', 'image', 'role_ids'
    ];

    protected $hidden = [
        'password', 'remember_token'
    ];

    protected $attributes = [
        'state'         => null,
        'lock'          => null,
        'name'          => null,
        'email'         => null,
        'password'      => null
    ];

    protected $casts = [
        'state'         => 'integer',
        'lock'          => 'integer',
        'name'          => 'string',
        'email'         => 'string',
        'password'      => 'string'
    ];

    public function roles()
    {
        return $this->belongsToMany(UserRole::class, 'user_role_links', 'user_id', 'user_role_id');
    }

    public function getRoleIdsAttribute()
    {
        return $this->roles->pluck('id');
    }

    public function setRoleIdsAttribute($value)
    {
        $this->saved(function($model) use ($value) {
            $model->roles()->sync($value);
        });
    }

    public function setPasswordAttribute($value)
    {
        if ($value) $this->attributes['password'] = Hash::make($value);
    }

    public function getImageAttribute()
    {
        return FieldHelper::getModel($this, 'image', null);
    }

    public function setImageAttribute($value)
    {
        return FieldHelper::setModel($this, 'image', $value);
    }

}
