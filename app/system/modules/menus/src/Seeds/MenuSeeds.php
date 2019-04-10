<?php

namespace Liro\Extension\Menus\Seeds;

use Liro\Extension\Menus\Models\Menu;

class MenuSeeds
{

    public function install()
    {
        $menu_frontend_home = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Home',
            'slug'          => '/',
            'module'        => 'liro-test.user.test.test',
            'domain_id'     => 2
        ]);

        $menu_frontend_test = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Test',
            'slug'          => 'test',
            'module'        => 'liro-test.user.test.test',
            'domain_id'     => 2
        ]);

        $menu_backend_home = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Dashboard',
            'slug'          => '/',
            'module'        => 'liro-system.admin.dashboard.index',
            'domain_id'     => 1
        ]);

        $menu_backend_users_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.user.index',
            'slug'          => 'users',
            'module'        => 'liro-menus.user.redirect.menu',
            'domain_id'     => 1
        ]);

        $menu_backend_users = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.user.index',
            'slug'          => 'users',
            'module'        => 'liro-users.admin.user.index',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_users_alias->update([
            'query'         => 'menu=' . $menu_backend_users->id
        ]);

        $menu_backend_user_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.user.create',
            'slug'          => 'create',
            'module'        => 'liro-users.admin.user.create',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_user_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.user.edit',
            'slug'          => 'edit',
            'module'        => 'liro-users.admin.user.edit',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_roles = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.role.index',
            'slug'          => 'roles',
            'module'        => 'liro-users.admin.role.index',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_role_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.role.create',
            'slug'          => 'create',
            'module'        => 'liro-users.admin.role.create',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_role_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.role.edit',
            'slug'          => 'edit',
            'module'        => 'liro-users.admin.role.edit',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_menus_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.menu.index',
            'slug'          => 'menus',
            'module'        => 'liro-menus.user.redirect.menu',
            'domain_id'     => 1
        ]);

        $menu_backend_menus = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.menu.index',
            'slug'          => 'menus',
            'module'        => 'liro-menus.admin.menu.index',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_menus_alias->update([
            'query'         => 'menu=' . $menu_backend_menus->id
        ]);

        $menu_backend_menu_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.menu.create',
            'slug'          => 'create',
            'module'        => 'liro-menus.admin.menu.create',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_menu_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.menu.edit',
            'slug'          => 'edit',
            'module'        => 'liro-menus.admin.menu.edit',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_types = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.type.index',
            'slug'          => 'types',
            'module'        => 'liro-menus.admin.type.index',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_type_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.type.create',
            'slug'          => 'create',
            'module'        => 'liro-menus.admin.type.create',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_type_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.type.edit',
            'slug'          => 'edit',
            'module'        => 'liro-menus.admin.type.edit',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_pages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-pages::page.page_index',
            'slug'          => 'pages',
            'module'        => 'liro-pages.admin.page.index',
            'domain_id'     => 1
        ]);

        $menu_backend_media = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Media',
            'slug'          => 'media',
            'module'        => 'liro-media.admin.folder.index',
            'domain_id'     => 1
        ]);

        $menu_backend_system = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'System',
            'slug'          => 'system',
            'module'        => 'liro-modules.admin.system.index',
            'domain_id'     => 1
        ]);

        $menu_backend_languages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-languages::admin.language.index',
            'slug'          => 'languages',
            'module'        => 'liro-languages.admin.language.index',
            'domain_id'     => 1
        ], $menu_backend_system);

        $menu_backend_language_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-languages::admin.language.create',
            'slug'          => 'create',
            'module'        => 'liro-languages.admin.language.create',
            'domain_id'     => 1
        ], $menu_backend_languages);

        $menu_backend_language_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-languages::admin.language.edit',
            'slug'          => 'edit',
            'module'        => 'liro-languages.admin.language.edit',
            'domain_id'     => 1
        ], $menu_backend_languages);

        $menu_backend_login = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.auth.login',
            'slug'          => 'login',
            'module'        => 'liro-users.admin.auth.login',
            'layout'        => 'login',
            'domain_id'     => 1
        ]);

        $menu_backend_logout = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.auth.logout',
            'slug'          => 'logout',
            'module'        => 'liro-users.admin.auth.logout',
            'layout'        => 'login',
            'domain_id'     => 1
        ]);
    }

}
