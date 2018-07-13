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

        foreach ($request->get('sources', []) as $file) {
            Storage::move($file, $request->get('target', null) . '/' . pathinfo($file, PATHINFO_BASENAME));
        }

        return response()->json([
            'message' => trans('liro-media.messages.media.moved'),
            'media' => new Folder('')
        ]);
    }

    public function upload(Request $request)
    {
        foreach ($request->file('files') as $file) {
            $file->storeAs($request->get('target', null), $file->getClientOriginalName());
        }
        
        return response()->json([
            'message' => trans('liro-media.messages.media.moved'),
            'media' => new Folder('')
        ]);
    }

}
