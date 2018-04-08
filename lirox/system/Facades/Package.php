<?php

namespace Lirox\System\Facades;

use Illuminate\Support\Facades\Facade;

class Package extends Facade 
{
     protected static function getFacadeAccessor()
     {
         return \Lirox\System\Services\Package::class;
    }
}