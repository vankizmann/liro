<?php

namespace Liro\Media\Controllers\Admin;

use Liro\Media\Prototypes\FolderPrototype as Folder;

class FolderController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->init('liro-media');
    }

    public function index()
    {
        $folder = Folder::make();

        app('assets')->dataArray([
            'folder' => $folder->toArray(), 'tree' => $folder->toTreeArray()
        ]);

        return view('liro-media::folder/index');
    }

}
