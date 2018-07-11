<?php

namespace Liro\Media\Helpers;

use Illuminate\Support\Facades\Storage;
use Liro\Media\Helpers\File;

class Folder
{

    public $name;
    public $path;
    public $directories = [];
    public $files = [];

    public function __construct($path)
    {
        $directories = Storage::directories($path);

        foreach ($directories as $directory) {
            $this->directories[] = new Folder($directory);
        }

        $files = Storage::files($path);

        foreach ($files as $file) {
            $this->files[] = new File($file);
        }

        $this->path = $path;
        $this->name = pathinfo($path, PATHINFO_BASENAME);
    }

    public function toArray()
    {
        return json_decode(json_encode($this), true);
    }

    public function toJson()
    {
        return json_encode($this);
    }
}