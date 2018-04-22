<?php

namespace Liro\System\Factory\Facade;

use Illuminate\Support\Facades\Facade;

class Style extends Facade 
{

     protected static function getFacadeAccessor()
     {
         return 'liro.style';
    }
    
}
