<?php

namespace Liro\System\Cms\Module;

use Liro\System\Cms\Module\Exceptions\ModuleException;
use Liro\System\Cms\Module\Abstracts\DataAbstract;

class BaseModule extends DataAbstract implements ModuleInterface
{

    public $path;

    public function __construct($path)
    {
        $this->path = dirname($path);
        $this->boot();
    }

    public function boot()
    {
        $data = include str_join('/', $this->path, 'index.php');

        if ( empty($data['name']) ) {
            throw new ModuleException("Parameter name missing in '$this->path'");
        }

        $this->data = $data;
    }

    public function install()
    {
        foreach ( $this->get('migrations.install', []) as $migration ) {
            app()->call($migration, [$this]);
        }

        return $this;
    }

    public function uninstall()
    {
        foreach ( $this->get('migrations.uninstall', []) as $migration ) {
            app()->call($migration, [$this]);
        }

        return $this;
    }

}
