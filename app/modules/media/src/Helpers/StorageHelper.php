<?php

namespace Liro\Media\Helpers;

use Illuminate\Support\Facades\Storage;

class StorageHelper
{

    /**
     * Delete files inside given path
     *
     * @param string $path
     * @param array $files
     * @return void
     */
    public static function deleteFiles($path, $files)
    {
        $files = array_filter($files);

        foreach ($files as $file) {
            Storage::delete(append_path($path, $file));
        }

        return;
    }

    /**
     * Upload files into given path
     *
     * @param string $path
     * @param array $files
     * @return void
     */
    public static function uploadFiles($path, $files)
    {
        $files = array_filter($files);

        foreach ($files as $file) {
            Storage::putFileAs($path, $file, prepend_file($path, $file->getClientOriginalName()));
        }

        return;
    }

    /**
     * Create folder inside path
     *
     * @param string $path
     * @param array $folders
     * @return void
     */
    public static function createFolders($path, $folders)
    {
        $folders = array_filter($folders);

        foreach ($folders as $folder) {
            Storage::makeDirectory(append_path($path, $folder));
        }

        return;
    }

    /**
     * Move files into given path
     *
     * @param string $path
     * @param array $files
     * @return void
     */
    public static function moveFiles($path, $files)
    {
        $files = array_filter($files);

        foreach ($files as $file) {
            Storage::move($file, append_path($path, $file));
        }

        return;
    }

}