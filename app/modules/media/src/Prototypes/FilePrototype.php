<?php

namespace Liro\Media\Prototypes;

use Ankitjain28may\Prettysize\Pretty;
use Illuminate\Support\Facades\Storage;

class FilePrototype
{

    public $name;

    public $path;

    public $url;

    public $size;

    public $human;

    public $type;

    public function __construct($path)
    {
        $this->path = $path;

        $this->loadDir();
        $this->loadName();
        $this->loadUrl();
        $this->loadSize();
        $this->loadType();
        $this->loadHuman();
    }

    public static function make($path) {
        return new FilePrototype($path);
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

    protected function loadDir()
    {
        return $this->dir = pathinfo($this->path, PATHINFO_DIRNAME);
    }

    protected function loadName()
    {
        return $this->name = pathinfo($this->path, PATHINFO_BASENAME);
    }

    protected function loadUrl()
    {
        return $this->url = Storage::url($this->path);
    }

    protected function loadSize()
    {
        return $this->size = Storage::size($this->path);
    }

    protected function loadHuman()
    {
        return $this->human = Pretty::pretty($this->size);
    }

    protected function loadType()
    {
        return $this->type = Storage::mimeType($this->path);
    }

    public function getNewByDir($dir)
    {
        return ltrim($dir . '/' . $this->name, '/');
    }

    public function getNewByName($name)
    {
        return ltrim($this->dir . '/' . $name, '/');
    }

    public function moveFile($dir)
    {
        $new = $this->getNewByDir($dir);

        if ( Storage::move($this->path, $new) ) {
            $this->path = $new;
        }

        return $this;
    }

    public function renameFile($name)
    {
        $new = $this->getNewByName($name);

        if ( Storage::move($this->path, $new) ) {
            $this->path = $new;
        }

        return $this;
    }

    public function deleteFile()
    {
        return Storage::delete($this->path);
    }

}