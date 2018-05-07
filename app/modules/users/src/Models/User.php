<?php

namespace Liro\Users\Models;

class User extends \Liro\System\Users\Models\User
{
    protected $appends = ['edit_route', 'role_ids'];

    protected $hidden = ['roles', 'password', 'remember_token', 'created_at', 'updated_at'];

    public function getEditRouteAttribute()
    {
        return route('liro.users.backend.users.edit', $this->id);
    }

    public function getRoleIdsAttribute()
    {
        return $this->roles->pluck('id');
    }

}
