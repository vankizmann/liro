<?php
namespace Liro\System\Users\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Database\CastableTrait;
use Liro\System\Users\Models\User;
use Liro\System\Users\Models\UserRoleRoute;

class UserRole extends Model
{
    use CastableTrait;

    protected $table = 'user_roles';

    protected $appends = [
        'route_names'
    ];

    protected $fillable = [
        'lock', 'title', 'description', 'access', 'route_names'
    ];

    protected $hidden = [
        'routes'
    ];

    protected $attributes = [
        'lock'          => null,
        'title'         => null,
        'description'   => null,
        'access'        => null
    ];

    protected $casts = [
        'lock'          => 'integer',
        'title'         => 'string',
        'description'   => 'string',
        'access'        => 'string'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_role_links', 'user_role_id', 'user_id');
    }

    public function routes()
    {
        return $this->hasMany(UserRoleRoute::class, 'user_role_id', 'id');
    }

    public function getRouteNamesAttribute()
    {
        return $this->routes->pluck('route');
    }

    public function setRouteNamesAttribute($values)
    {
        $this->saved(function($model) use ($values) {

            foreach ($values as $value) {
                $model->routes()->firstOrCreate(['route' => $value]);
            }
    
           $model->routes()->whereNotIn('route', $values)->delete();
        });
    }

}
