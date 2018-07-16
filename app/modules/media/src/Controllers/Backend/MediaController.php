<?php

namespace Liro\Media\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Liro\Media\Helpers\Folder;
use Liro\System\Http\Controller;

class MediaController extends Controller
{
    public function index()
    {
        return view('liro-media::backend/media/index', [
            'media' => new Folder(''),
        ]);
    }

    public function move(Request $request)
    {
        $path = $request->get('path', null);

        foreach ($request->get('files', []) as $file) {
            Storage::move($file, filename($path, $file));
        }

        return response()->json([
            'message' => trans('liro-media.messages.media.moved'), 'media' => new Folder('')
        ]);
    }

    public function upload(Request $request)
    {
        $path = $request->get('path', null);

        foreach ($request->file('files') as $file) {
            $file->storeAs($path, filename(null, $file->getClientOriginalName()));
        }

        return response()->json([
            'message' => trans('liro-media.messages.media.uploaded'),
            'media' => new Folder(''),
        ]);
    }

}
