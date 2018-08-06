<?php
namespace Liro\System\Users\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Liro\System\Users\Models\UserRole;
use Liro\System\Users\Models\UserRoleRoute;

class User extends \Illuminate\Foundation\Auth\User
{
    use Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'state', 'name', 'email', 'password', 'image'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $attributes = [
        'state' => 0
    ];

    public function roles()
    {
        return $this->belongsToMany(UserRole::class, 'user_role_link', 'user_id', 'user_role_id');
    }

    public function scopeGetRolesRoutes()
    {
        return $this->roles->map(function($role) {
            return $role->routes->pluck('route');
        })->flatten();
    }

    public function hasRoles($roles = [])
    {
        return $this->roles()->whereIn('access', $roles)->count();
    }

    public function hasRole($roles = [])
    {
        return $this->roles()->where('access', $roles)->count();
    }

    public function hasRoute($route)
    {
        return $this->getRolesRoutes()->intersect($route)->count();
    }

    public function hasRoutes($routes)
    {
        return $this->getRolesRoutes()->intersect($routes)->count();
    }

    public function setPasswordAttribute($password)
    {
        if ( $password != '' ) {
            $this->attributes['password'] = Hash::make($password);
        }
    }

    public function setImageAttribute($value)
    {
        $this->attributes['image'] = @json_encode($value) ?: $value;
    }

    public function getImageAttribute()
    {
        return @json_decode($this->attributes['image'], true) ?: [];
    }

}
