<?php

namespace Liro\Media\Prototypes;

use Illuminate\Support\Facades\Storage;
use Liro\Media\Prototypes\FilePrototype;

class FolderPrototype
{
    public $path;

    public $name;

    public $dirs = [];

    public $files = [];

    public function __construct($path)
    {
        $this->path = $path;

        $this->getName();
        $this->bootFolders();
        $this->bootFiles();
    }

    public static function make($path = '') {
        return new FolderPrototype($path);
    }

    public function toArray()
    {
        return json_decode(json_encode($this), true);
    }

    public function toJson()
    {
        return json_encode($this);
    }

    public function getName()
    {
        return $this->name = $this->name ?: pathinfo($this->path, PATHINFO_BASENAME);
    }

    protected function bootFolders()
    {
        $dirs = Storage::directories($this->path);

        $this->dirs = collect($dirs)->map(function ($dir) {
            return new FolderPrototype($dir);
        });

        return $this->dirs;
    }

    protected function bootFiles()
    {
        $files = Storage::files($this->path);

        $this->files = collect($files)->map(function ($file) {
            return new FilePrototype($file);
        });

        return $this->files;
    }

}