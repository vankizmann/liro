<?php

namespace Liro\Users\Models;

class User extends \Liro\System\Users\Models\User
{
    protected $appends = ['edit_route', 'roles_names'];

    public function getEditRouteAttribute()
    {
        return route('liro.users.backend.users.edit', $this->id);
    }

    public function getRolesNamesAttribute()
    {
        return $this->roles->pluck('title', 'id');
    }


}
