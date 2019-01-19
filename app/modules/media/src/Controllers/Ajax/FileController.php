<?php

namespace Liro\Media\Controllers\Ajax;

use Illuminate\Http\Request;
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
        $file = $request->file('file');

        $dest = $file->storeAs($path, $file->getClientOriginalName());

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