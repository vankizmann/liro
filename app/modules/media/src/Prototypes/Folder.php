<?php

namespace Liro\Media\Prototypes;

use Illuminate\Support\Facades\Storage;
use Liro\Media\Prototypes\File;

class Folder
{

    /**
     * Folder name
     *
     * @var string
     */
    public $name;

    /**
     * Folder path
     *
     * @var string
     */
    public $path;

    /**
     * Directories inside the folder
     *
     * @var array
     */
    public $directories = [];

    /**
     * Files inside the folder
     *
     * @var array
     */
    public $files = [];

    /**
     * Constructer function
     *
     * @param string $path
     */
    public function __construct($path)
    {
        // Set path relative to storage
        $this->path = $path;

        // Get folder name
        $this->name = pathinfo($path, PATHINFO_BASENAME);

        // Read directories inside this folder
        $directories = Storage::directories($this->path);

        foreach ($directories as $directory) {
            $this->directories[] = new Folder($directory);
        }

        // Read files inside this folder
        $files = Storage::files($this->path);

        foreach ($files as $file) {
            $this->files[] = new File($file);
        }

        return;
    }

    /**
     * Make new instance
     *
     * @param string $path
     * @return void
     */
    public static function make($path = '') {
        return new Folder($path);
    }

    /**
     * Convert class to array
     *
     * @return array
     */
    public function toArray()
    {
        return json_decode(json_encode($this), true);
    }

    /**
     * Convert class to json string
     *
     * @return string
     */
    public function toJson()
    {
        return json_encode($this);
    }
}