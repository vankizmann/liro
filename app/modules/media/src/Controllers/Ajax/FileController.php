<?php

namespace Liro\Media\Controllers\Ajax;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Liro\Media\Prototypes\FilePrototype;

class FileController extends \Liro\System\Http\Controller
{

    public function rename(Request $request)
    {
        $file = FilePrototype::make(
            $request->input('source', '')
        );

        $file->renameFile(
            $request->input('destination', '')
        );

        return response()->json($file, 200);
    }

    public function upload(Request $request)
    {
        $path = $request->input('path', '');
        $dest = $request->file->storeAs($path, $request->file->getClientOriginalName());

        return response()->json(FilePrototype::make($dest), 200);
    }

    public function move(Request $request)
    {
        $file = FilePrototype::make(
            $request->input('source', '')
        );

        $file->moveFile(
            $request->input('destination', '')
        );

        return response()->json($file, 200);
    }

    public function delete(Request $request)
    {
        $file = FilePrototype::make(
            $request->input('source', '')
        );

        $file->deleteFile();

        return response()->json([], 200);
    }

}