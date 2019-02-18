<html lang="{{ app()->getLocale() }}">
<head>
    @php
        $defaultUrl = app()->getMenuTypeKey('default.route_prefix');

        app('assets')->data('states', [
            ['value' => 1, 'label' => trans('theme::form.state.enabled')],
            ['value' => 0, 'label' => trans('theme::form.state.disabled')]
        ]);

        app('assets')->data('locks', [
            ['value' => 0, 'label' => trans('theme::form.lock.unlocked')],
            ['value' => 1, 'label' => trans('theme::form.lock.locked')]
        ]);

        app('assets')->data('hides', [
            ['value' => 0, 'label' => trans('theme::form.hide.visible')],
            ['value' => 1, 'label' => trans('theme::form.hide.hidden')]
        ]);

        app('assets')->data('defaults', [
            ['value' => 1, 'label' => trans('theme::form.default.enabled')],
            ['value' => 0, 'label' => trans('theme::form.default.disabled')]
        ]);

        app('assets')->locale('theme');
    @endphp

    @include('theme::partials/head')

</head>
<body class="theme-page">

    @include('theme::partials/notification')

    <div id="app">

        <theme-layout>
            @yield('content')
        </theme-layout>

        <portal to="menubar-left" :order="100">
            <theme-nav-item class="margin-20--right">
                <img src="{{ app('assets')->file('theme::dist/images/liro-negative.svg') }}" alt="{{ app()->getTitle() }}" width="80" height="20">
            </theme-nav-item>
        </portal>

        <portal to="menubar-left" :order="200">
            @include('theme::menus/default', [
                'menus' => app('menus')->getMenusByTypeId(2)->toTree()
            ])
        </portal>

        <portal to="menubar-right" :order="100">
            <theme-nav-item size="small">
                <el-badge is-dot>
                    <theme-nav-link><i class="el-icon-bell"></i></theme-nav-link>
                </el-badge>
                <liro-user-notification slot="dropdown" />
            </theme-nav-item>
        </portal>

        <portal to="menubar-right" :order="200">
            <theme-nav-item size="small">
                <theme-nav-link>{{ app('users')->getName() }}</theme-nav-link>
            </theme-nav-item>
        </portal>

        <portal to="menubar-right" :order="300">
            <theme-nav-item size="small">
                <a href="{{ route('liro-users.admin.auth.login') }}">{{ trans('liro-users::form.auth.login') }}</a>
            </theme-nav-item>
        </portal>

        <portal to="menubar-right" :order="400">
            <theme-nav-item size="small">
                <a href="{{ route('liro-users.admin.auth.logout') }}">{{ trans('liro-users::form.auth.logout') }}</a>
            </theme-nav-item>
        </portal>

        <portal to="toolbar-left" :order="100">
            <theme-nav-item>
                <h4 class="text--primary text--light">{{ app()->getTitle() }}</h4>
            </theme-nav-item>
        </portal>

    </div>

</body>
</html>
