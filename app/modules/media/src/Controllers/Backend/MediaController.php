<?php

namespace Liro\Media\Controllers\Backend;

use Illuminate\Http\Request;
use Liro\Media\Prototypes\Folder;
use Liro\System\Http\Controller;
use Liro\Media\Helpers\StorageHelper;

class MediaController extends Controller
{
    /**
     * Index function
     *
     * @return void
     */
    public function index()
    {
        return view('liro-media::backend/media/index', [
            'media' => Folder::make()
        ]);
    }

    /**
     * Move files function
     *
     * @param Request $request
     * @return void
     */
    public function move(Request $request)
    {
        StorageHelper::moveFiles($request->get('path', null), $request->get('files', []));

        return response()->json([
            'message' => trans('liro-media.messages.media.moved'), 'media' => Folder::make()
        ]);
    }
    
    /**
     * Detele files function
     *
     * @param Request $request
     * @return void
     */
    public function delete(Request $request)
    {
        StorageHelper::deleteFiles($request->get('path', null), $request->get('files', []));

        return response()->json([
            'message' => trans('liro-media.messages.media.deleted'), 'media' => Folder::make(),
        ]);
    }

    /**
     * Upload files function
     *
     * @param Request $request
     * @return void
     */
    public function upload(Request $request)
    {
        StorageHelper::uploadFiles($request->get('path', null), $request->file('files', []));

        return response()->json([
            'message' => trans('liro-media.messages.media.uploaded'), 'media' => Folder::make(),
        ]);
    }

    /**
     * Create folder function
     *
     * @param Request $request
     * @return void
     */
    public function create(Request $request)
    {
        StorageHelper::createFolders($request->get('path', null), $request->get('folders', []));

        return response()->json([
            'message' => trans('liro-media.messages.media.created'), 'media' => Folder::make(),
        ]);
    }

}
