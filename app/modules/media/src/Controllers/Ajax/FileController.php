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
        $path = $request->input('path', '');
        $dest = pathinfo($path, PATHINFO_DIRNAME) . '/' . $request->input('dest', '');

        Storage::move($path, $dest);

        return response()->json(FilePrototype::make($dest), 200);
    }

    public function upload(Request $request)
    {
        $path = $request->input('path', '');
        $dest = $request->file->storeAs($path, $request->file->getClientOriginalName());

        return response()->json(FilePrototype::make($dest), 200);
    }

    public function delete(Request $request)
    {
        $path = $request->input('path', '');

        Storage::delete($path);

        return response()->json([], 200);
    }

}