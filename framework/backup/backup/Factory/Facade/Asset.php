<?php

namespace Liro\System\Factory\Facade;

use Illuminate\Support\Facades\Facade;

class Asset extends Facade 
{

     protected static function getFacadeAccessor()
     {
         return 'liro.asset';
    }
    
}
