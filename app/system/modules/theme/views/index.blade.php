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

        <div id="app" class="th-index-app uk-flex">

            <div class="th-index-navigation uk-flex-none uk-flex">
                <div class="th-navbar uk-flex">
                    <div class="uk-navbar">

                        <div class="uk-navbar-top">
                            <div class="uk-navbar-item uk-logo uk-flex-center uk-flex-middle">
                                <a class="uk-display-inline-block" href="{{ url($defaultUrl ?: '/') }}">
                                    <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="96" height="24" uk-svg>
                                </a>
                            </div>
                        </div>

                        <div class="uk-navbar-top uk-margin-bottom">
                            <div class="uk-navbar-item uk-navbar-label uk-flex-left uk-flex-middle">
                                <span class="uk-text-uppercase">{{ trans('theme::default.user') }}</span>
                            </div>
                            <div class="uk-navbar-item uk-navbar-user uk-flex-left uk-flex-middle">
                                <div class="uk-flex-none uk-margin-right">
                                    <img class="uk-border-circle" src="https://api.adorable.io/avatars/80/{{ app('users')->getId() }}" width="40" height="40" alt="">
                                </div>
                                <div class="uk-flex-1">
                                    <div class="is-name">
                                        <span>{{ app('users')->getName() }}</span>
                                    </div>
                                    <a class="is-edit" href="{{ route('liro-users.admin.auth.login') }}">
                                        {{ trans('liro-users::admin.auth.edit') }}
                                    </a>
                                </div>
                                <div class="uk-margin-left uk-flex-none">
                                    <a class="is-logout" href="{{ route('liro-users.admin.auth.logout') }}" v-confirm="{ message: '{{ trans('liro-users::message.auth.logout') }}'}">
                                        <i uk-icon="sign-out"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="uk-navbar-top uk-margin-bottom">
                            <div class="uk-navbar-item uk-navbar-label uk-flex-left uk-flex-middle">
                                <span class="uk-text-uppercase">{{ trans('theme::default.navigation') }}</span>
                            </div>
                            <ul id="main-menu" class="uk-nav">
                                @include('theme::menus/default', [
                                    'menus' => app('menus')->getMenusByTypeId(2)->toTree(), 'icon' => true
                                ])
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div class="uk-flex-1">

                <div class="th-index-header">

                    <div class="th-navbar" style="display: none;">
                        {{-- <div class="uk-container uk-container-expand"> --}}
                            <div class="uk-navbar">

                                <div class="uk-navbar-left">
                                    <div class="uk-navbar-item uk-logo uk-margin-large-right">
                                        <a class="uk-display-inline-block" href="{{ url($defaultUrl ?: '/') }}">
                                            <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="80" height="20" uk-svg>
                                        </a>
                                    </div>
                                </div>

                                <div class="uk-navbar-right">
                                    @include('theme::menus/default', [
                                        'menus' => app('menus')->getMenusByTypeId(2)->toTree(), 'style' => 'uk-navbar-nav uk-margin-large-right'
                                    ])
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
                        {{-- </div> --}}
                    </div>

                    <div class="th-topbar">
                        {{-- <div class="uk-container uk-container-expand"> --}}
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
                        {{-- </div> --}}
                    </div>

                </div>

                {{-- <div class="uk-container uk-container-expand"> --}}
                    <div class="th-index-body">
                        @yield('content')
                    </div>
                {{-- </div> --}}

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
