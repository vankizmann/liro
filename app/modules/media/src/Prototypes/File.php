<?php

namespace Liro\Media\Prototypes;

use Illuminate\Support\Facades\Storage;

class File
{

    /**
     * File name
     *
     * @var string
     */
    public $name;

    /**
     * File path
     *
     * @var string
     */
    public $path;

    /**
     * File url
     *
     * @var string
     */
    public $url;

    /**
     * File size
     *
     * @var integer
     */
    public $size;

    /**
     * File mime type
     *
     * @var string
     */
    public $type;

    /**
     * Constructer function
     *
     * @param string $path
     */
    public function __construct($path)
    {
        // Set relative file path in storage
        $this->path = $path;

        // Get file url from storage
        $this->url = Storage::url($path);

        // Get filename
        $this->name = pathinfo($path, PATHINFO_BASENAME);

        // Get file size from storage
        $this->size = Storage::size($path);

        // Get mime type from storage
        $this->type = Storage::mimeType($path);

        return;
    }
    
}