<?php
namespace Liro\System\Users\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Database\CastableTrait;
use Liro\System\Users\Models\UserRole;

class UserRoleRoute extends Model
{
    use CastableTrait;

    protected $table = 'user_role_routes';

    protected $fillable = [
        'route', 'user_role_id'
    ];

    protected $attributes = [
        'route'         => null,
        'user_role_id'  => null
    ];

    protected $casts = [
        'route'         => 'string',
        'user_role_id'  => 'integer'
    ];

    public function roles()
    {
        return $this->hasMany(UserRole::class, 'id', 'user_role_id');
    }

}
