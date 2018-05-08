<?php

namespace Liro\Users\Models;

use Liro\System\Users\Models\UserRoleRoute;

class UserRole extends \Liro\System\Users\Models\UserRole
{
    protected $attributes = [];

    protected $appends = ['edit_route', 'user_ids', 'route_ids', 'route_names'];

    protected $hidden = ['users', 'routes', 'created_at', 'updated_at'];

    protected $fillable = ['title', 'description', 'access', 'route_names'];

    public function getEditRouteAttribute()
    {
        return $this->id ? route('liro-users.backend.roles.edit', $this->id) : '';
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

    public function setRouteNamesAttribute($new)
    {
        $old = $this->route_names->toArray();

        foreach ( array_diff($new, $old) as $route ) {
            UserRoleRoute::create([ 'route' => $route, 'user_role_id' => $this->id ]);
        }

        foreach ( array_diff($old, $new) as $route ) {
            UserRoleRoute::where('user_role_id', $this->id)->where('route', $route)->delete();
        }

        return;
    }

}
