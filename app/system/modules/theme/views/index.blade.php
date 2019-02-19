<html lang="{{ app()->getLocale() }}">
<head>
    @php
        $defaultUrl = app()->getMenuTypeKey('default.route_prefix');

        app('assets')->storage('states', [
            ['value' => 1, 'label' => trans('theme::form.state.enabled')],
            ['value' => 0, 'label' => trans('theme::form.state.disabled')]
        ]);

        app('assets')->storage('locks', [
            ['value' => 0, 'label' => trans('theme::form.lock.unlocked')],
            ['value' => 1, 'label' => trans('theme::form.lock.locked')]
        ]);

        app('assets')->storage('hides', [
            ['value' => 0, 'label' => trans('theme::form.hide.visible')],
            ['value' => 1, 'label' => trans('theme::form.hide.hidden')]
        ]);

        app('assets')->storage('defaults', [
            ['value' => 1, 'label' => trans('theme::form.default.enabled')],
            ['value' => 0, 'label' => trans('theme::form.default.disabled')]
        ]);

        app('assets')->locale('theme');
    @endphp

    @include('theme::partials/head')

</head>
<body class="app-page">

    @include('theme::partials/notification')

    <div id="app">

        <app-layout>
            @yield('content')
        </app-layout>

        <portal to="menubar-left" :order="100">
            <app-nav-item class="margin-20--right">
                <app-nav-link href="{{ url($defaultUrl ?: '/') }}">
                    <img src="{{ app('assets')->file('theme::dist/images/liro-negative.svg') }}" alt="{{ app()->getTitle() }}" width="80" height="20">
                </app-nav-link>
            </app-nav-item>
        </portal>

        <portal to="menubar-left" :order="200">
            @include('theme::menus/dropdown', [
                'menus' => app('menus')->getMenusByTypeId(2)->toTree()
            ])
        </portal>

        <portal to="menubar-right" :order="100">
            <app-nav-item size="small">
                <app-nav-dropdown :width="320">
                    <el-badge is-dot>
                        <app-nav-link><i class="el-icon-bell"></i></app-nav-link>
                    </el-badge>
                    <app-component slot="dropdown" element="liro-user-notification" />
                </app-nav-dropdown>
            </app-nav-item>
        </portal>

        <portal to="menubar-right" :order="200">
            <app-nav-item size="small">
                <app-nav-dropdown>
                    <app-nav-link>{{ app('users')->getName() }}</app-nav-link>
                    <ul class="nav__dropdown-nav" slot="dropdown">
                        <app-nav-item>
                            <app-nav-link href="{{ route('liro-users.admin.auth.login') }}">
                                {{ trans('liro-users::form.auth.edit') }}
                            </app-nav-link>
                        </app-nav-item>
                        <app-nav-item>
                            <app-nav-link href="{{ route('liro-users.admin.auth.logout') }}">
                                {{ trans('liro-users::form.auth.logout') }}
                            </app-nav-link>
                        </app-nav-item>
                    </ul>
                </app-nav-dropdown>
            </app-nav-item>
        </portal>

        <portal to="toolbar-left" :order="100">
            <app-nav-item>
                <h4 class="text--primary text--light">{{ app()->getTitle() }}</h4>
            </app-nav-item>
        </portal>

    </div>

</body>
</html>
