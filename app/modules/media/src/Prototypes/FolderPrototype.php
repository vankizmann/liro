<?php

namespace Liro\Media\Prototypes;

use Illuminate\Support\Facades\Storage;
use Liro\Media\Prototypes\FilePrototype;

class FolderPrototype
{
    public $path;

    public $name;

    public $count = 0;

    public $dirs = [];

    public $files = [];

    public function __construct($path)
    {
        $this->path = $path;

        $this->bootFolders();
        $this->bootFiles();

        $this->getName();
        $this->getCount();
    }

    public static function make($path = '') {
        return new FolderPrototype($path);
    }

    public function toArray()
    {
        $array = json_decode(json_encode($this), true);
        return collect($array)->toArray();
    }

    public function toJson()
    {
        $array = json_decode(json_encode($this), true);
        return collect($array)->toJson();
    }

    public function getName()
    {
        return $this->name = $this->name ?: pathinfo($this->path, PATHINFO_BASENAME);
    }

    public function getCount()
    {
        return $this->count = $this->count ?: count($this->dirs) + count($this->files);
    }

    protected function bootFolders()
    {
        $dirs = Storage::directories($this->path);

        $this->dirs = collect($dirs)->reduce(function ($result, $dir) {
            return array_merge($result, [ md5($dir) => new FolderPrototype($dir) ]);
        }, []);

        $this->files = collect($this->files)->filter(function ($file) {
            return ! in_array($file->name, ['node_modules']);
        });

        return $this->dirs;
    }

    protected function bootFiles()
    {
        $files = Storage::files($this->path);

        $this->files = collect($files)->reduce(function ($result, $file) {
            return array_merge($result, [ md5($file) => new FilePrototype($file) ]);
        }, []);

        $this->files = collect($this->files)->filter(function ($file) {
            return ! in_array($file->name, ['.DS_Store']);
        });

        return $this->files;
    }

}