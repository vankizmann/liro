<?php

namespace Liro\Media\Controllers\Ajax;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Liro\Media\Prototypes\FolderPrototype;

class FolderController extends \Liro\System\Http\Controller
{

    public function index(Request $request)
    {
        $folder = FolderPrototype::make(
            $request->input('path', '')
        );

        return response()->json($folder, 200);
    }

    public function create(Request $request)
    {
        $folder = FolderPrototype::make(
            $request->input('source', '')
        );

        $folder->createFolder(
            $request->input('destination', '')
        );

        return response()->json($folder, 200);
    }

    public function rename(Request $request)
    {
        $folder = FolderPrototype::make(
            $request->input('source', '')
        );

        $folder->renameFolder(
            $request->input('destination', '')
        );

        return response()->json($folder, 200);
    }

    public function move(Request $request)
    {
        $folder = FolderPrototype::make(
            $request->input('source', '')
        );

        $folder->moveFolder(
            $request->input('destination', '')
        );

        return response()->json($folder, 200);
    }

    public function delete(Request $request)
    {
        $folder = FolderPrototype::make(
            $request->input('source', '')
        );

        $folder->deleteFolder();

        return response()->json([], 200);
    }

}