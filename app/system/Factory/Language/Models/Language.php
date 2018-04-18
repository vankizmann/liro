<?php

namespace App\Factory\Language\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

class Language extends Model
{
    protected $table = 'languages';

    public function enabled()
    {
        return $this->where('state', 1);
    }

    public function disabled()
    {
        return $this->where('state', 0);
    }

    public function default()
    {
        return $this->where('default', 1);
    }

    public function request()
    {
        $locale = Request::segment(1, null);
        return $this->where('locale', $locale);
    }

}
