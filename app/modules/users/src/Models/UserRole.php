<?php

namespace Liro\Users\Models;

class UserRole extends \Liro\System\Users\Models\UserRole
{
    protected $appends = ['edit_route', 'user_ids', 'route_ids', 'route_names'];

    protected $hidden = ['users', 'routes', 'created_at', 'updated_at'];

    public function getEditRouteAttribute()
    {
        return route('liro.users.backend.roles.edit', $this->id);
    }

    public function getUserIdsAttribute()
    {
        return $this->users->pluck('id');
    }

    public function getRouteIdsAttribute()
    {
        return $this->routes->pluck('id');
    }

    public function getRouteNamesAttribute()
    {
        return $this->routes->pluck('route');
    }

}
