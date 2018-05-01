<?php

namespace Liro\Users\Models;

class User extends \Liro\System\Users\Models\User
{
    public function getEditRouteAttribute()
    {
        return route('liro.users.backend.users.edit', $this->id);
    }
}
