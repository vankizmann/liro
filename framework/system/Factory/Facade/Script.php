<?php

namespace Liro\System\Factory\Facade;

use Illuminate\Support\Facades\Facade;

class Script extends Facade 
{

     protected static function getFacadeAccessor()
     {
         return 'liro.script';
    }
    
}
