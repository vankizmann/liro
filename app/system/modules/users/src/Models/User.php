<?php
namespace Liro\System\Users\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Liro\System\Users\Models\UserRole;

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
        'state', 'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function roles()
    {
        return $this->belongsToMany(UserRole::class, 'user_role_link', 'user_id', 'user_role_id');
    }

    public function hasRoles($roles = [])
    {
        return $this->roles()->whereIn('access', $roles)->count();
    }

    public function hasRole($roles = [])
    {
        return $this->roles()->where('access', $roles)->count();
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = Hash::make($password);
    }

}
