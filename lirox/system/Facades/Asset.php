<?php

namespace Lirox\System\Facades;

use Illuminate\Support\Facades\Facade;

class Asset extends Facade 
{

     protected static function getFacadeAccessor()
     {
         return \Lirox\System\Services\Asset::class;
    }
    
}