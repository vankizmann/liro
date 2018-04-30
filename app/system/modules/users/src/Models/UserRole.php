<?php
namespace Liro\System\Users\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Users\Models\User;
use Liro\System\Users\Models\UserRoleRoute;

class UserRole extends Model
{
    protected $table = 'user_roles';

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_role_link', 'user_role_id', 'user_id');
    }

    public function routes()
    {
        return $this->hasMany(UserRoleRoute::class, 'user_role_id', 'id');
    }

    public function scopeGetCollectionRoutes()
    {
        return $this->get()->map(function($role) {
            return $role->routes->pluck('route');
        })->flatten();
    }

}
