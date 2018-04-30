<?php
namespace Liro\System\Users\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Users\Models\UserRole;

class UserRoleRoute extends Model
{
    protected $table = 'user_role_routes';

    public function roles()
    {
        return $this->hasMany(UserRole::class, 'id', 'user_role_id');
    }

}
