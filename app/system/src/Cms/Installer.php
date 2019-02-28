<?php

namespace Liro\System\Cms;

class Installer extends Web
{

    public function boot()
    {
        parent::boot();

        app()->booted(function () {
            // TODO: Pack into a migrate module
            $this->unguarded([$this, 'install']);
            dd(app('cms.modules')->loaded->keys()->toArray());
        });
    }

    public function install()
    {
        foreach ( app('cms.modules')->loaded as $module ) {
            /* @var \Liro\System\Cms\Module\BaseModule $module */
            $module->uninstall()->install();
        }

        return;
    }

}
