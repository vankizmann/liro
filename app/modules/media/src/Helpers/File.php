<?php

namespace Liro\Media\Helpers;

use Illuminate\Support\Facades\Storage;

class File
{

    public $name;
    public $path;

    public function __construct($path)
    {
        $this->path = $path;
        $this->name = pathinfo($path, PATHINFO_BASENAME);
    }
    
}