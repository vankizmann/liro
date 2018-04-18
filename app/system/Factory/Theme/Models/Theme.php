<?php

namespace App\Factory\Package\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

class Package extends Model
{
    protected $table = 'packages';

    public function enabled()
    {
        return $this->where('state', 1);
    }

    public function disabled()
    {
        return $this->where('state', 0);
    }

}
