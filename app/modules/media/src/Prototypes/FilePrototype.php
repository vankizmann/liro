<?php

namespace Liro\Media\Prototypes;

use Illuminate\Support\Facades\Storage;

class FilePrototype
{

    public $name;

    public $path;

    public $url;

    public $size;

    public $type;

    public function __construct($path)
    {
        $this->path = $path;

        $this->getName();
        $this->getUrl();
        $this->getSize();
        $this->getType();
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

    public function getUrl()
    {
        return $this->url = $this->url ?: Storage::url($this->path);
    }

    public function getSize()
    {
        return $this->size = $this->size ?: Storage::size($this->path);
    }

    public function getType()
    {
        return $this->type = $this->type ?: Storage::mimeType($this->path);
    }

}