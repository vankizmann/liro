<?php

namespace Liro\Auth\Database;

use Liro\Support\Database\ModelPrototype;
use App\Database\User;
use App\Database\Policy;

class Role extends ModelPrototype
{
    protected $table = 'roles';

    protected $guarded = [
        'uuid',
    ];

    protected $attributes = [
        'uuid'        => null,
        'title'       => null,
        'description' => null,
        'access'      => null,
        'guard'       => null,
    ];

    protected $casts = [
        'uuid'        => 'uuid',
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
