<?php

namespace Liro\Users\Models;

class User extends \Liro\System\Users\Models\User
{
    protected $appends = ['edit_route', 'enable_route', 'disable_route', 'role_ids'];

    protected $hidden = ['roles', 'password', 'remember_token', 'created_at', 'updated_at'];

    protected $fillable = ['state', 'name', 'email', 'password', 'role_ids'];

    public function getEditRouteAttribute()
    {
        return $this->id ? route('liro-users.backend.users.edit', $this->id) : '';
    }

    public function getEnableRouteAttribute()
    {
        return $this->id ? route('liro-users.backend.users.enable', $this->id) : '';
    }

    public function getDisableRouteAttribute()
    {
        return $this->id ? route('liro-users.backend.users.disable', $this->id) : '';
    }

    public function getRoleIdsAttribute()
    {
        return $this->roles->pluck('id');
    }

    public function setRoleIdsAttribute($value)
    {
        $this->roles()->sync($value);
    }

}
