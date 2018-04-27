<?php

namespace Framework\Language\Model;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $table = 'languages';

    public function getEnabledWhereDefault($default = 1)
    {
        return $this->where('state', 1)->where('default', $default)->pluck('locale');
    }

    public function getEnabledWhereLocale($locale = 'en')
    {
        return $this->where('state', 1)->where('locale', $locale)->pluck('locale');
    }

}