<?php

namespace Liro\Media\Helpers;

use Illuminate\Support\Facades\Storage;

class File
{

    public $name;
    public $path;
    public $url;
    public $size;
    public $type;

    public function __construct($path)
    {
        $this->path = $path;
        $this->url = Storage::url($path);
        $this->name = pathinfo($path, PATHINFO_BASENAME);
        $this->size = Storage::size($path);
        $this->type = mime_content_type(Storage::path($path));
    }
    
}