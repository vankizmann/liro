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
            'module'        => 'liro-test.test.test',
            'default'       => 1,
            'menu_type_id'  => $menu_type_frontend->id
        ]);

        $menu_frontend_test = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'Test',
            'route'         => 'test',
            'module'        => 'liro-test.test.test',
            'default'       => 0,
            'menu_type_id'  => $menu_type_frontend->id
        ]);

        $menu_backend_home = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'Dashboard',
            'route'         => '/',
            'module'        => 'liro-test.test.test',
            'default'       => 1,
            'icon'          => '/app/modules/test/resources/dist/images/icon-dashboard.svg',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_users_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'liro-users::module.user.index',
            'route'         => 'users',
            'module'        => 'liro-menus.redirect.menu',
            'default'       => 0,
            'icon'          => '/app/modules/users/resources/dist/images/icon-users.svg',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_users = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'liro-users::module.user.index',
            'route'         => 'users',
            'module'        => 'liro-users.user.index',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_users_alias->update([
            'query'         => 'menu=' . $menu_backend_users->id
        ]);

        $menu_backend_user_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-users::module.user.create',
            'route'         => 'create',
            'module'        => 'liro-users.user.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_user_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-users::module.user.edit',
            'route'         => 'edit',
            'module'        => 'liro-users.user.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_roles = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'liro-users::module.role.index',
            'route'         => 'roles',
            'module'        => 'liro-users.role.index',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_role_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-users::module.role.create',
            'route'         => 'create',
            'module'        => 'liro-users.role.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_role_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-users::module.role.edit',
            'route'         => 'edit',
            'module'        => 'liro-users.role.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_menus_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'liro-menus::module.menu.index',
            'route'         => 'menus',
            'module'        => 'liro-menus.redirect.menu',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_menus = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'liro-menus::module.menu.index',
            'route'         => 'menus',
            'module'        => 'liro-menus.menu.index',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_menus_alias->update([
            'query'         => 'menu=' . $menu_backend_menus->id
        ]);

        $menu_backend_menu_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-menus::module.menu.create',
            'route'         => 'create',
            'module'        => 'liro-menus.menu.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_menu_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-menus::module.menu.edit',
            'route'         => 'edit',
            'module'        => 'liro-menus.menu.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_types = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'liro-menus::module.type.index',
            'route'         => 'types',
            'module'        => 'liro-menus.type.index',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_type_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-menus::module.type.create',
            'route'         => 'create',
            'module'        => 'liro-menus.type.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_type_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-menus::module.type.edit',
            'route'         => 'edit',
            'module'        => 'liro-menus.type.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_pages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'liro-pages::page.page_index',
            'route'         => 'pages',
            'module'        => 'liro-pages.page.index',
            'default'       => 0,
            'icon'          => '/app/modules/pages/resources/dist/images/icon-pages.svg',
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_media = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'Media',
            'route'         => 'media',
            'module'        => 'liro-media.media.index',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_languages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'liro-languages::module.language.index',
            'route'         => 'languages',
            'module'        => 'liro-languages.language.index',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_language_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-languages::module.language.create',
            'route'         => 'create',
            'module'        => 'liro-languages.language.create',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_languages->id
        ]);

        $menu_backend_language_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 0,
            'title'         => 'liro-languages::module.language.edit',
            'route'         => 'edit',
            'module'        => 'liro-languages.language.edit',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id,
            'parent_id'     => $menu_backend_languages->id
        ]);

        $menu_backend_modules = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'lock'          => 0,
            'title'         => 'System',
            'route'         => 'system',
            'module'        => 'liro-modules.system.index',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_login = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-users::module.auth.login',
            'route'         => 'login',
            'module'        => 'liro-users.auth.login',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ]);

        $menu_backend_logout = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'lock'          => 1,
            'title'         => 'liro-users::module.auth.logout',
            'route'         => 'logout',
            'module'        => 'liro-users.auth.logout',
            'default'       => 0,
            'menu_type_id'  => $menu_type_backend->id
        ]);

        // Menu::fixTree();
    }

}