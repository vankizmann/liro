<html lang="{{ app()->getLocale() }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

        <title>{{ app()->getTitleWithAffix() }}</title>

        @php
            app('scripts')->setData('states', [
                ['value' => 1, 'label' => trans('theme::form.state.enabled')],
                ['value' => 0, 'label' => trans('theme::form.state.disabled')]
            ]);

            app('scripts')->setData('locks', [
                ['value' => 0, 'label' => trans('theme::form.lock.unlocked')],
                ['value' => 1, 'label' => trans('theme::form.lock.locked')]
            ]);

            app('scripts')->setData('hides', [
                ['value' => 0, 'label' => trans('theme::form.hide.visible')],
                ['value' => 1, 'label' => trans('theme::form.hide.hidden')]
            ]);

            app('scripts')->addMessage('theme::form');
        @endphp

        @php
            app('scripts')->addLink('theme-script', 'theme::dist/js/script.js');
            echo app('scripts')->output();
        @endphp

        @php
            app('styles')->addLink('theme-style', 'theme::dist/css/style.css');
            echo app('styles')->output();
        @endphp

    </head>
    <body class="th-index">

        @include('theme::partials/notification')

        <div id="app">

            <div class="th-navbar">
                <div class="uk-container uk-container-expand">
                    <div class="uk-navbar">

                        <div class="uk-navbar-left">
                            <div class="uk-navbar-item uk-logo uk-margin-large-right">
                                <img src="/app/system/modules/theme/resources/dist/images/liro.svg" width="80" height="20" :uk-svg="true">
                            </div>
                        </div>

                        <div class="uk-navbar-right">
                            <ul class="th-navbar-large uk-navbar-nav uk-margin-large-right">
                                @include('theme::partials/menus', [
                                    'menus' => app('menus')->getMenusByTypeId(2)->toTree()
                                ])
                            </ul>
                            <ul class="uk-navbar-nav">
                                <li>
                                    <a href="{{ route('liro-users.auth.login') }}">
                                        <i class="uk-margin-small-right" :uk-icon="'user'"></i>{{ app('users')->getName() }}
                                    </a>
                                </li>
                                <li>
                                    <span class="uk-navbar-divider"></span>
                                </li>
                                <li>
                                    <a href="{{ route('liro-users.auth.logout') }}">{{ trans('liro-users::form.auth.logout') }}</a>
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

            <div class="uk-container uk-container-expand">
                <div class="th-index-body">
                    @yield('content')
                </div>
            </div>

            <liro-auth-modal></liro-auth-modal>

        </div>

        <script>
            window.setHeight = function (selector, height) {
                $(selector).height(height);
            }
        </script>

    </body>
</html>
