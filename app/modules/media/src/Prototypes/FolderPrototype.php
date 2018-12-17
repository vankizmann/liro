<?php

namespace Liro\Media\Prototypes;

use Illuminate\Support\Facades\Storage;
use Liro\Media\Prototypes\FilePrototype;

class FolderPrototype
{
    protected $maxLayer;

    protected $currentLayer;

    public $path;

    public $name;

    public $count = 0;

    public $ladder = [];

    public $dirs = [];

    public $files = [];

    public function __construct($path, $maxLayer = 3, $currentLayer = 0)
    {
        $this->path = $path ?: '';

        $this->maxLayer = $maxLayer;
        $this->currentLayer = $currentLayer;

        $this->bootFolders();
        $this->bootFiles();

        $this->getName();
        $this->getCount();
        $this->getLadder();
    }

    public static function make($path = '', $maxLayer = 3, $currentLayer = 0) {
        return new FolderPrototype($path, $maxLayer, $currentLayer);
    }

    protected function bootFolders($buildTree = false)
    {
        if ( $this->currentLayer == $this->maxLayer ) {
            return;
        }

        $dirs = Storage::directories($this->path);

        $this->dirs = collect($dirs)->reduce(function ($result, $dir) {
            return array_merge($result, [
                md5($dir) => new FolderPrototype($dir, $this->maxLayer, $this->currentLayer + 1)
            ]);
        }, []);

        $this->files = collect($this->files)->filter(function ($file) {
            return ! in_array($file->name, ['node_modules']);
        });

        return $this->dirs;
    }

    protected function bootFiles()
    {
        if ( $this->currentLayer == $this->maxLayer ) {
            return;
        }
        
        $files = Storage::files($this->path);

        $this->files = collect($files)->reduce(function ($result, $file) {
            return array_merge($result, [
                md5($file) => new FilePrototype($file)
            ]);
        }, []);

        $this->files = collect($this->files)->filter(function ($file) {
            return ! in_array($file->name, ['.DS_Store']);
        });

        return $this->files;
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
        $this->name = pathinfo($this->path, PATHINFO_BASENAME);
    }

    public function getCount()
    {
        $this->count = count($this->dirs) + count($this->files);
    }

    public function getLadder()
    {
        $items = explode('/', $this->path);

        $ladder = [
            trans('liro-media::form.folder.root') => ''
        ];

        foreach ( array_filter($items) as $index => $item ) {
            $ladder[$item ?: 'root'] = implode('/', array_slice($items, 0, $index+1));
        }

        $this->ladder = $ladder;
    }

}