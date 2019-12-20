<?php

namespace Liro\Support\Routing\Traits;

trait ResolveLayout
{
    public $layout = null;

    public function initializeResolveLayout()
    {
        $moduleName = preg_replace('/^(.*?)::(.*?)$/', '$1',
            web()->getLayout());

        if ( empty($moduleName) ) {
            return;
        }

        $layout = app('web.module')->getModule($moduleName);

        if ( empty($layout) ) {
            return;
        }

        $filePath = str_join('/', $layout->path,
            'resources/views/vendor');

        foreach ( scandir($filePath) as $vendor ) {

            if ( in_array($vendor, ['.', '..']) ) {
                continue;
            }

            app('view')->prependNamespace($vendor, "{$filePath}/{$vendor}");
        }

        $this->layout = $layout;
    }

}
