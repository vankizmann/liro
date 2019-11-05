<?php

namespace Liro\Media\Prototypes;

use Illuminate\Support\Facades\Storage;
use Liro\System\Exceptions\Exception;

class FolderPrototype
{
    protected $import;

    protected $deepness;

    protected $cursor;

    public $path;

    public $dir;

    public $name;

    public $count = 0;

    public $ladder = [];

    public $dirs = [];

    public $files = [];

    public function __construct($path, $deepness = 1, $cursor = 0, $import = true)
    {
        $this->path = $path ?: '';

        $this->dir  = pathinfo($this->path, PATHINFO_DIRNAME);
        $this->name = pathinfo($this->path, PATHINFO_BASENAME);

        $this->deepness = $deepness;
        $this->cursor   = $cursor;
        $this->import   = $import;

        $this->bootFolders();
        $this->bootFiles();

        $this->loadCount();
        $this->loadLadder();
    }

    public static function make($path = '', $deepness = 1, $cursor = 0)
    {
        return new FolderPrototype($path, $deepness, $cursor);
    }

    protected function bootFolders()
    {
        if ($this->cursor == $this->deepness) {
            return null;
        }

        $dirs = Storage::directories($this->path);

        $this->dirs = collect($dirs)
          ->filter(function ($dir) {
              return !in_array(pathinfo($dir, PATHINFO_BASENAME), ['node_modules']);
          })
          ->map(function ($dir) {
              return new FolderPrototype($dir, $this->deepness, $this->cursor + 1, $this->import);
          });

        return $this->dirs;
    }

    protected function bootFiles()
    {
        if ($this->cursor == $this->deepness || $this->import == false) {
            return null;
        }

        $files = Storage::files($this->path);

        $this->files = collect($files)
          ->filter(function ($file) {
              return !in_array(pathinfo($file, PATHINFO_BASENAME), ['.DS_Store']);
          })
          ->map(function ($file) {
              return new FilePrototype($file);
          });

        return $this->files;
    }

    public function toArray()
    {
        $fields = [
          'path', 'dir', 'name', 'dirs', 'files', 'count', 'ladder',
        ];

        return collect($this)->only($fields)->toArray();
    }

    public function toJson()
    {
        $fields = [
          'path', 'dir', 'name', 'dirs', 'files', 'count', 'ladder',
        ];

        return collect($this)->only($fields)->toJson();
    }

    public function toTreeArray($root = true)
    {
        $tree = new FolderPrototype($root ? '' : $this->path, -1, 0, false);

        return collect($tree)->toArray();
    }

    public function toTreeJson($root = true)
    {
        $tree = new FolderPrototype($root ? '' : $this->path, -1, false);

        return collect($tree)->toJson();
    }

    protected function loadCount()
    {
        $dirs = Storage::directories($this->path);

        $dirs = collect($dirs)->filter(function ($dir) {
            return !in_array(pathinfo($dir, PATHINFO_BASENAME), ['node_modules']);
        });

        $files = Storage::files($this->path);

        $files = collect($files)->filter(function ($file) {
            return !in_array(pathinfo($file, PATHINFO_BASENAME), ['.DS_Store']);
        });

        $this->count = count($dirs) + count($files);
    }

    protected function loadLadder()
    {
        $items = explode('/', $this->path);

        $ladder = [
          ['name' => trans('liro-media::form.folder.root'), 'path' => ''],
        ];

        foreach (array_filter($items) as $index => $item) {
            $ladder[] = ['name' => $item, 'path' => implode('/', array_slice($items, 0, $index + 1))];
        }

        $this->ladder = $ladder;
    }

    public function createFolder($name)
    {
        $new = ltrim($this->path . '/' . $name, '/');

        if (Storage::exists($new)) {
            throw new Exception('liro-media::message.folder.exists');
        }

        if (!Storage::makeDirectory($new)) {
            throw new Exception('liro-media::message.media.rights');
        }

        return new FolderPrototype($new);
    }

    public function moveFolder($dir)
    {
        $new = ltrim($dir . '/' . $this->name, '/');

        if (Storage::exists($new)) {
            throw new Exception('liro-media::message.folder.exists');
        }

        if (!Storage::move($this->path, $new)) {
            throw new Exception('liro-media::message.media.rights');
        }

        return new FolderPrototype($new);
    }

    public function renameFolder($name)
    {
        $new = ltrim($this->dir . '/' . $name, '/');

        if (Storage::exists($new)) {
            throw new Exception('liro-media::message.folder.exists');
        }

        if (!Storage::move($this->path, $new)) {
            throw new Exception('liro-media::message.media.rights');
        }

        return new FolderPrototype($new);
    }

    public function deleteFolder()
    {
        return Storage::deleteDirectory($this->path);
    }

}
