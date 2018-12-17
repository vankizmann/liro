<?php

namespace Liro\Media\Controllers\Ajax;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Liro\Media\Prototypes\FolderPrototype as Folder;

class FolderController extends \Liro\System\Http\Controller
{

    public function index(Request $request)
    {
        $path = $request->input('path', '');

        return response()->json(Folder::make($path), 200);
    }

    public function create(Request $request)
    {
        $path = $request->input('path', '');
        $name = $request->input('name', '');

        Storage::makeDirectory($dest = $path . '/' . $name);

        return response()->json(Folder::make($dest), 200);
    }

    public function rename(Request $request)
    {
        $path = $request->input('path', '');
        $dest = pathinfo($path, PATHINFO_DIRNAME) . '/' . $request->input('dest', '');

        Storage::move($path, $dest);

        return response()->json(Folder::make($dest), 200);
    }

    public function delete(Request $request)
    {
        $path = $request->input('path', '');

        Storage::deleteDirectory($path);

        return response()->json([], 200);
    }

}