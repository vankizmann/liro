<?php

namespace Liro\System\Menus;

use Liro\System\Menus\Models\Menu;
use Liro\System\Menus\Models\Domain;

class Seeder
{

    public function install()
    {
        $menu_type_frontend = Domain::create([
            'state'         => 1,
            'title'         => 'Frontend',
            'route'         => '{domain}/{locale}',
            'theme'         => 'system-theme'
        ]);

        $menu_type_backend = Domain::create([
            'state'         => 1,
            'title'         => 'Backend',
            'route'         => '{domain}/{locale}/{backend}',
            'theme'         => 'system-theme'
        ]);

        $menu_frontend_home = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Home',
            'slug'          => '/',
            'path'          => 'liro-test.user.test.test',
            'domain_id'     => $menu_type_frontend->id
        ]);

        $menu_frontend_test = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Test',
            'slug'          => 'test',
            'path'          => 'liro-test.user.test.test',
            'domain_id'     => $menu_type_frontend->id
        ]);

        $menu_backend_home = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Dashboard',
            'slug'          => '/',
            'path'          => 'liro-test.user.test.test',
            'icon'          => 'tachometer',
            'domain_id'     => $menu_type_backend->id
        ]);

        $menu_backend_users_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.user.index',
            'slug'          => 'users',
            'path'          => 'liro-menus.user.redirect.menu',
            'icon'          => 'users',
            'domain_id'     => $menu_type_backend->id
        ]);

        $menu_backend_users = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.user.index',
            'slug'          => 'users',
            'path'          => 'liro-users.admin.user.index',
            'icon'          => 'user-plus',
            'domain_id'     => $menu_type_backend->id,
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
            'path'          => 'liro-users.admin.user.create',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_user_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.user.edit',
            'slug'          => 'edit',
            'path'          => 'liro-users.admin.user.edit',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users->id
        ]);

        $menu_backend_roles = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-users::admin.role.index',
            'slug'          => 'roles',
            'path'          => 'liro-users.admin.role.index',
            'icon'          => 'user-shield',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_users_alias->id
        ]);

        $menu_backend_role_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.role.create',
            'slug'          => 'create',
            'path'          => 'liro-users.admin.role.create',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_role_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.role.edit',
            'slug'          => 'edit',
            'path'          => 'liro-users.admin.role.edit',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_roles->id
        ]);

        $menu_backend_menus_alias = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.menu.index',
            'slug'          => 'menus',
            'path'          => 'liro-menus.user.redirect.menu',
            'icon'          => 'compass',
            'domain_id'     => $menu_type_backend->id
        ]);

        $menu_backend_menus = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.menu.index',
            'slug'          => 'menus',
            'path'          => 'liro-menus.admin.menu.index',
            'icon'          => 'bars',
            'domain_id'     => $menu_type_backend->id,
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
            'path'          => 'liro-menus.admin.menu.create',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_menu_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.menu.edit',
            'slug'          => 'edit',
            'path'          => 'liro-menus.admin.menu.edit',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus->id
        ]);

        $menu_backend_types = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-menus::admin.type.index',
            'slug'          => 'types',
            'path'          => 'liro-menus.admin.type.index',
            'icon'          => 'layer-group',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_menus_alias->id
        ]);

        $menu_backend_type_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.type.create',
            'slug'          => 'create',
            'path'          => 'liro-menus.admin.type.create',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_type_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-menus::admin.type.edit',
            'slug'          => 'edit',
            'path'          => 'liro-menus.admin.type.edit',
            'domain_id'     => $menu_type_backend->id,
            'parent_id'     => $menu_backend_types->id
        ]);

        $menu_backend_pages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-pages::page.page_index',
            'slug'          => 'pages',
            'path'          => 'liro-pages.admin.page.index',
            'icon'          => 'file',
            'domain_id'     => $menu_type_backend->id
        ]);

        $menu_backend_media = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'Media',
            'slug'          => 'media',
            'path'          => 'liro-media.admin.folder.index',
            'icon'          => 'camera',
            'domain_id'     => $menu_type_backend->id
        ]);

        $menu_backend_system = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'System',
            'slug'          => 'system',
            'path'          => 'liro-modules.admin.system.index',
            'icon'          => 'cog',
            'domain_id'     => $menu_type_backend->id
        ]);

        $menu_backend_languages = Menu::create([
            'state'         => 1,
            'hide'          => 0,
            'title'         => 'liro-languages::admin.language.index',
            'slug'          => 'languages',
            'path'          => 'liro-languages.admin.language.index',
            'icon'          => 'globe',
            'domain_id'     => $menu_type_backend->id
        ], $menu_backend_system);

        $menu_backend_language_create = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-languages::admin.language.create',
            'slug'          => 'create',
            'path'          => 'liro-languages.admin.language.create',
            'domain_id'     => $menu_type_backend->id
        ], $menu_backend_languages);

        $menu_backend_language_edit = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-languages::admin.language.edit',
            'slug'          => 'edit',
            'path'          => 'liro-languages.admin.language.edit',
            'domain_id'     => $menu_type_backend->id
        ], $menu_backend_languages);

        $menu_backend_login = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.auth.login',
            'slug'          => 'login',
            'path'          => 'liro-users.admin.auth.login',
            'domain_id'     => $menu_type_backend->id
        ]);

        $menu_backend_logout = Menu::create([
            'state'         => 1,
            'hide'          => 1,
            'title'         => 'liro-users::admin.auth.logout',
            'slug'          => 'logout',
            'path'          => 'liro-users.admin.auth.logout',
            'domain_id'     => $menu_type_backend->id
        ]);

        // Menu::fixTree();
    }

}
