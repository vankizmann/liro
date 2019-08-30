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
            'module'        => 'liro-system.user.dashboard.index',
            'domain_id'     => 2
        ]);

        $menu_frontend_test = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Test',
            'slug'          => 'test',
            'module'        => 'liro-system.admin.dashboard.index',
            'domain_id'     => 2,
            'parent_id'     => $menu_frontend_home->id
        ]);

        $menu_backend_home = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Dashboard',
            'slug'          => '/',
            'module'        => 'liro-system-dashboard-index',
            'domain_id'     => 1
        ]);

        $menu_backend_users_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.user.index',
            'slug'          => 'users',
            'module'        => 'liro-users-user-index',
            'domain_id'     => 1,
            'query'         => 'redirect=liro-users-user-index'
        ]);

        $menu_backend_users = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.user.index',
            'slug'          => 'users',
            'module'        => 'liro-users-user-index',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_user_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.user.create',
            'slug'          => 'create',
            'module'        => 'liro-users-user-create',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_user_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.user.edit',
            'slug'          => 'edit/:user',
            'module'        => 'liro-users-user-edit',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_roles = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.role.index',
            'slug'          => 'roles',
            'module'        => 'liro-users-role-index',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_role_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.role.create',
            'slug'          => 'create',
            'module'        => 'liro-users-role-create',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_role_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.role.edit',
            'slug'          => 'edit/:role',
            'module'        => 'liro-users-role-edit',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_menus_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.menu.index',
            'slug'          => 'menus',
            'module'        => 'liro-menus-menu-index',
            'domain_id'     => 1,
            'query'         => 'redirect=liro-menus-menu-index'
        ]);

        $menu_backend_menus = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.menu.index',
            'slug'          => 'menus',
            'module'        => 'liro-menus-menu-index',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_menu_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.menu.create',
            'slug'          => 'create',
            'module'        => 'liro-menus-menu-create',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_menu_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.menu.edit',
            'slug'          => 'edit/:menu',
            'module'        => 'liro-menus-menu-edit',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_types = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.type.index',
            'slug'          => 'types',
            'module'        => 'liro-menus-type-index',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_type_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.type.create',
            'slug'          => 'create',
            'module'        => 'liro-menus-type-create',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_type_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.type.edit',
            'slug'          => 'edit/:type',
            'module'        => 'liro-menus-type-edit',
            'domain_id'     => 1,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_pages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-pages::admin.page.index',
            'slug'          => 'pages',
            'module'        => 'liro-pages-page-index',
            'domain_id'     => 1
        ]);

        $menu_backend_media = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Media',
            'slug'          => 'media',
            'module'        => 'liro-media-folder-index',
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
            'module'        => 'liro-languages-language-index',
            'domain_id'     => 1
        ], $menu_backend_system);

        $menu_backend_language_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-languages::admin.language.create',
            'slug'          => 'create',
            'module'        => 'liro-languages-language-create',
            'domain_id'     => 1
        ], $menu_backend_languages);

        $menu_backend_language_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-languages::admin.language.edit',
            'slug'          => 'edit/:language',
            'module'        => 'liro-languages-language-edit',
            'domain_id'     => 1
        ], $menu_backend_languages);

        $menu_backend_login = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.auth.login',
            'slug'          => 'login',
            'module'        => 'liro-users-auth-login',
            'domain_id'     => 1
        ]);

        $menu_backend_logout = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.auth.logout',
            'slug'          => 'logout',
            'module'        => 'liro-users-auth-logout',
            'domain_id'     => 1
        ]);
    }

}
