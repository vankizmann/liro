<?php

namespace Liro\Extension\Menus\Seeds;

use Liro\Extension\Menus\Models\Domain;

class DomainSeeds
{

    public function install()
    {
        Domain::create([
            'state'         => 1,
            'title'         => 'Liro CMS',
            'route'         => ':domain/:locale/backend',
            'theme'         => 'liro-backend',
            'guard'         => 1,
            'config'        => [
                'vue' => true
            ]
        ]);

        Domain::create([
            'state'         => 1,
            'title'         => 'Default Domain',
            'route'         => ':domain/:locale',
            'theme'         => 'liro-frontend',
            'guard'         => 1
        ]);

        Domain::create([
            'state'         => 1,
            'title'         => 'Test Domain',
            'route'         => 'liro-test',
            'theme'         => 'liro-frontend',
            'guard'         => 1
        ]);
    }

}
