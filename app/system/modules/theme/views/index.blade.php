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

        app('assets')->message('theme');
    @endphp

    @include('theme::partials/head')

</head>
<body class="th-index">

@include('theme::partials/notification')

<div id="app" class="th-index-app uk-flex uk-flex-column">

    <div class="uk-flex-1 uk-flex uk-flex-column">

        <div class="th-index-header uk-width-1-1 uk-flex-none">

            <div class="th-navbar">

                <div class="uk-navbar-left">
                    <div class="uk-navbar-item uk-logo uk-flex-center uk-flex-middle">
                        <a class="uk-display-inline-block" href="{{ url($defaultUrl ?: '/') }}">
                            <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="96" height="24" uk-svg>
                        </a>
                    </div>
                </div>

                <div class="uk-nabbar-right">

                </div>

            </div>

            <div class="th-topbar">
                <div class="uk-navbar">

                    <div class="uk-navbar-left">
                        <div class="uk-navbar-item">
                            <h1 class="uk-text-primary uk-margin-remove">{{ app()->getTitle() }}</h1>
                        </div>
                    </div>

                    <portal-target class="uk-navbar-right" name="app-toolbar" :multiple="true">
                        @yield('toolbar')
                    </portal-target>

                </div>
            </div>
        </div>

        <div class="uk-flex-1-1 uk-flex-auto uk-flex">
            <portal-target class="th-index-sidebar uk-width-1-1" name="app-sidebar" :multiple="false">
                <!-- Sidebar -->
            </portal-target>
            <div class="th-index-body uk-width-1-1">
                @yield('content')
            </div>
            <portal-target class="th-index-infobar uk-width-1-1" name="app-infobar" :multiple="false">
                <!-- Infobar -->
            </portal-target>
        </div>

    </div>

    <liro-auth-modal></liro-auth-modal>

</div>

<div class="th-spinner uk-position-cover">
    <div class="uk-position-center" uk-spinner="icon: spinner-third; ratio: 0.125;"></div>
</div>

<script>
    $(document).ready(function () {
        $('#main-menu > li > a').click(function (event) {

            if ( $(this).parent().children('.uk-nav').length ) {
                event.preventDefault();
            }

            $(this).parent().children('.uk-nav').slideToggle(150);
        });
    });
</script>

</body>
</html>



<?php return; ?>



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

            app('assets')->message('theme');
        @endphp

        @include('theme::partials/head')

    </head>
    <body class="th-index">

        @include('theme::partials/notification')

        <div id="app">

            <div class="th-index-header">

                <div class="th-navbar">
                    <div class="uk-container uk-container-expand">
                        <div class="uk-navbar">

                            <div class="uk-navbar-left">
                                <div class="uk-navbar-item uk-logo uk-margin-large-right">
                                    <a class="uk-display-inline-block" href="{{ url($defaultUrl ?: '/') }}">
                                        <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="80" height="20" uk-svg>
                                    </a>
                                </div>
                            </div>

                            <div class="uk-navbar-right">
                                <ul id="main-menu" class="uk-navbar-nav">
                                    @include('theme::menus/default', [
                                        'menus' => app('menus')->getMenusByTypeId(2)->toTree(), 'icon' => true
                                    ])
                                </ul>
                                <ul class="uk-navbar-nav uk-text-small">
                                    <li>
                                        <a class="uk-inline" href="{{ route('liro-users.admin.auth.login') }}">
                                            <img class="uk-border-circle uk-margin-small-right" src="https://api.adorable.io/avatars/50/{{ app('users')->getId() }}" width="25" height="25" alt="">
                                            <span>{{ app('users')->getName() }}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <span class="uk-navbar-divider"></span>
                                    </li>
                                    <li>
                                        <a href="{{ route('liro-users.admin.auth.logout') }}">{{ trans('liro-users::form.auth.logout') }}</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="th-topbar">
                    <div class="uk-container uk-container-expand">
                        <div class="uk-navbar">

                            <div class="uk-navbar-left">
                                <div class="uk-navbar-item">
                                    <h1 class="uk-text-primary uk-margin-remove">{{ app()->getTitle() }}</h1>
                                </div>
                            </div>

                            <portal-target class="uk-navbar-right" name="app-toolbar" :multiple="true">
                                @yield('toolbar')
                            </portal-target>

                        </div>
                    </div>
                </div>

            </div>

            <div class="uk-container uk-container-expand">
                <div class="th-index-body">
                    @yield('content')
                </div>
            </div>

            <liro-auth-modal></liro-auth-modal>

        </div>

        <div class="th-spinner uk-position-cover">
            <div class="uk-position-center" uk-spinner="icon: spinner-third; ratio: 0.125;"></div>
        </div>

    </body>
</html>
