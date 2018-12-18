<?php

namespace Liro\Media\Prototypes;

use Illuminate\Support\Facades\Storage;
use Liro\System\Exceptions\Exception;
use Liro\Media\Prototypes\FilePrototype;

class FolderPrototype
{
    protected $maxLayer;

    protected $currentLayer;

    public $path;

    public $dir;

    public $name;

    public $count = 0;

    public $ladder = [];

    public $dirs = [];

    public $files = [];

    public function __construct($path, $maxLayer = 3, $currentLayer = 0)
    {
        $this->path = $path ?: '';

        $this->dir = pathinfo($this->path, PATHINFO_DIRNAME);
        $this->name = pathinfo($this->path, PATHINFO_BASENAME);

        $this->maxLayer = $maxLayer;
        $this->currentLayer = $currentLayer;

        $this->bootFolders();
        $this->bootFiles();

        $this->loadCount();
        $this->loadLadder();
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
        return collect($this)->toArray();
    }

    public function toJson()
    {
        return collect($this)->toJson();
    }

    protected function loadCount()
    {
        $this->count = count($this->dirs) + count($this->files);
    }

    protected function loadLadder()
    {
        $items = explode('/', $this->path);

        $ladder = [
            ['name' => trans('liro-media::form.folder.root'), 'path' => '']
        ];

        foreach ( array_filter($items) as $index => $item ) {
            $ladder[] = ['name' => $item, 'path' => implode('/', array_slice($items, 0, $index+1))];
        }

        $this->ladder = $ladder;
    }

    public function createFolder($name)
    {
        $new = ltrim($this->path . '/' . $name, '/');

        if ( Storage::exists($new) ) {
            throw new Exception('liro-media::message.folder.exists');
        }

        if ( ! Storage::makeDirectory($new) ) {
            throw new Exception('liro-media::message.media.rights');
        }

        return new FolderPrototype($new);
    }

    public function moveFolder($dir)
    {
        $new = ltrim($dir . '/' . $this->name, '/');

        if ( Storage::exists($new) ) {
            throw new Exception('liro-media::message.folder.exists');
        }

        if ( ! Storage::move($this->path, $new) ) {
            throw new Exception('liro-media::message.media.rights');
        }

        return new FolderPrototype($new);
    }

    public function renameFolder($name)
    {
        $new = ltrim($this->dir . '/' . $name, '/');

        if ( Storage::exists($new) ) {
            throw new Exception('liro-media::message.folder.exists');
        }

        if ( ! Storage::move($this->path, $new) ) {
            throw new Exception('liro-media::message.media.rights');
        }

        return new FolderPrototype($new);
    }

    public function deleteFolder()
    {
        return Storage::deleteDirectory($this->path);
    }

}