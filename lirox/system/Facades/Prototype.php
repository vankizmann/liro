<?php

namespace Lirox\System\Facades;

use Illuminate\Support\Facades\Facade;

class Prototype extends Facade 
{
     protected static function getFacadeAccessor()
     {
         return \Lirox\System\Services\Prototype::class;
    }
}