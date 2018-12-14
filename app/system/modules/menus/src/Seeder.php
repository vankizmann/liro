<?php

namespace Liro\System\Menus;

use Liro\System\Menus\Models\Menu;
use Liro\System\Menus\Models\MenuType;

class Seeder
{

    public function install()
    {
        $menu_type_frontend = MenuType::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'locale'        => '',
            'title'         => 'Frontend',
            'route'         => '/',
            'theme'         => 'system-theme'
        ]);

        $menu_type_backend = MenuType::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'locale'        => '',
            'title'         => 'Backend',
            'route'         => 'backend',
            'theme'         => 'system-theme'
        ]);

        $menu_frontend_home = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'Home',
            'route'         => '/',
            'module'        => 'liro-test.user.test.test',
            'default'       => 1,
            'menu_type_id'  => $menu_type_frontend->id
        ]);

        $menu_frontend_test = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'Test',
            'route'         => 'test',
            'module'        => 'liro-test.user.test.test',
            'default'       => 0,
            'menu_type_id'  => $menu_type_frontend->id
        ]);

        $menu_backend_home = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'Dashboard',
            'route'         => '/',
            'module'        => 'liro-test.user.test.test',
            'default'       => 1,
            'icon'          => 'tachometer',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_users_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'liro-users::admin.user.index',
            'route'         => 'users',
            'module'        => 'liro-menus.user.redirect.menu',
            'default'       => 0,
            'icon'          => 'user',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_users = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'liro-users::admin.user.index',
            'route'         => 'users',
            'module'        => 'liro-users.admin.user.index',
            'default'       => 0,
            'icon'          => 'user-plus',
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_users_alias->update([
            'query'         => 'menu=' . $menu_backend_users->id
        ]);

        $menu_backend_user_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-users::admin.user.create',
            'route'         => 'create',
            'module'        => 'liro-users.admin.user.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_user_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-users::admin.user.edit',
            'route'         => 'edit',
            'module'        => 'liro-users.admin.user.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_roles = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'liro-users::admin.role.index',
            'route'         => 'roles',
            'module'        => 'liro-users.admin.role.index',
            'default'       => 0,
            'icon'          => 'user-shield',
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_role_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-users::admin.role.create',
            'route'         => 'create',
            'module'        => 'liro-users.admin.role.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_role_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-users::admin.role.edit',
            'route'         => 'edit',
            'module'        => 'liro-users.admin.role.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_menus_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'liro-menus::admin.menu.index',
            'route'         => 'menus',
            'module'        => 'liro-menus.user.redirect.menu',
            'default'       => 0,
            'icon'          => 'compass',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_menus = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'liro-menus::admin.menu.index',
            'route'         => 'menus',
            'module'        => 'liro-menus.admin.menu.index',
            'default'       => 0,
            'icon'          => 'bars',
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_menus_alias->update([
            'query'         => 'menu=' . $menu_backend_menus->id
        ]);

        $menu_backend_menu_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-menus::admin.menu.create',
            'route'         => 'create',
            'module'        => 'liro-menus.admin.menu.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_menu_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-menus::admin.menu.edit',
            'route'         => 'edit',
            'module'        => 'liro-menus.admin.menu.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_types = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'liro-menus::admin.type.index',
            'route'         => 'types',
            'module'        => 'liro-menus.admin.type.index',
            'default'       => 0,
            'icon'          => 'layer-group',
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_type_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-menus::admin.type.create',
            'route'         => 'create',
            'module'        => 'liro-menus.admin.type.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_type_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-menus::admin.type.edit',
            'route'         => 'edit',
            'module'        => 'liro-menus.admin.type.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_pages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'liro-pages::page.page_index',
            'route'         => 'pages',
            'module'        => 'liro-pages.admin.page.index',
            'default'       => 0,
            'icon'          => 'file',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_media = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'Media',
            'route'         => 'media',
            'module'        => 'liro-media.admin.folder.index',
            'default'       => 0,
            'icon'          => 'camera',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_system = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'System',
            'route'         => 'system',
            'module'        => 'liro-modules.admin.system.index',
            'default'       => 0,
            'icon'          => 'cog',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_languages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 1,
            'title'         => 'liro-languages::admin.language.index',
            'route'         => 'languages',
            'module'        => 'liro-languages.admin.language.index',
            'default'       => 0,
            'icon'          => 'globe',
            'menu_type_id'  => $menu_type_backend->id
        ], $menu_backend_system);

        $menu_backend_language_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-languages::admin.language.create',
            'route'         => 'create',
            'module'        => 'liro-languages.admin.language.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ], $menu_backend_languages);

        $menu_backend_language_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-languages::admin.language.edit',
            'route'         => 'edit',
            'module'        => 'liro-languages.admin.language.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ], $menu_backend_languages);

        $menu_backend_login = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-users::admin.auth.login',
            'route'         => 'login',
            'module'        => 'liro-users.admin.auth.login',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_logout = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-users::admin.auth.logout',
            'route'         => 'logout',
            'module'        => 'liro-users.admin.auth.logout',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ]);

        // Menu::fixTree();
    }

}