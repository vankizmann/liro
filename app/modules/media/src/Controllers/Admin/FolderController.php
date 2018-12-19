<?php

namespace Liro\Media\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Liro\Media\Prototypes\FolderPrototype as Folder;

class FolderController extends \Liro\System\Http\Controller
{

    public function __construct()
    {
        app('assets')->module('liro-media');
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