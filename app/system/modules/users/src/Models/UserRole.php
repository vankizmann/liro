<?php
namespace Liro\System\Users\Models;

use Illuminate\Database\Eloquent\Model;
use Liro\System\Users\Models\UserRole;

class UserRole extends Model
{
    protected $table = 'user_roles';

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_role_link', 'user_role_id', 'user_id');
    }

}
