<?php

namespace Liro\Extension\Menus\Seeds;

use Liro\Extension\Menus\Models\Domain;

class DomainSeeds
{

    public function install()
    {
        $backend = Domain::create([
            'state'         => 1,
            'title'         => 'Backend',
            'route'         => ':domain/:locale/backend',
            'theme'         => 'system-theme',
            'guard'         => 1
        ]);

        $frontend = Domain::create([
            'state'         => 1,
            'title'         => 'Frontend',
            'route'         => ':domain/:locale',
            'theme'         => 'system-theme',
            'guard'         => 1
        ]);
    }

}
