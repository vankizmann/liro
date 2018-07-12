<?php

namespace Liro\Media\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Liro\System\Http\Controller;
use Liro\Media\Helpers\Folder;

class MediaController extends Controller
{
    public function index()
    {
        return view('liro-media::backend/media/index', [
            'media' => new Folder('')
        ]);
    }

    public function move(Request $request)
    {
        $source = $request->get('source', null);
        $target = $request->get('target', null);


        Storage::move($source, rtrim($target, '/') . '/' . pathinfo($source, PATHINFO_BASENAME));

        return response()->json([
            'message' => trans('liro-media.messages.media.moved'),
            'media' => new Folder('')
        ]);
    }

    public function upload(Request $request)
    {
        $target = $request->get('target', null);

        foreach ($request->file('files') as $file) {
            $file->storeAs($target, $file->getClientOriginalName());
        }
        
        return response()->json([
            'message' => trans('liro-media.messages.media.moved'),
            'media' => new Folder('')
        ]);
    }

}
