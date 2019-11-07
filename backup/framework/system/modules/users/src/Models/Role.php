<?php

namespace Liro\Extension\Users\Models;

class Role extends \Liro\System\Database\Model
{
    protected $table = 'roles';

    protected $guarded = [
        'id',
    ];

    protected $attributes = [
        'title'       => null,
        'description' => null,
        'access'      => null,
        'guard'       => null,
    ];

    protected $casts = [
        'title'       => 'string',
        'description' => 'string',
        'access'      => 'string',
        'guard'       => 'integer',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_to_role', 'role_id', 'user_id');
    }

    public function policies()
    {
        return $this->belongsToMany(Policy::class, 'role_to_policy', 'role_id', 'policy_id');
    }

}
