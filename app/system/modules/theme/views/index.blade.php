<html lang="{{ app()->getLocale() }}">
    <head>
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

            app('scripts')->setData('defaults', [
                ['value' => 1, 'label' => trans('theme::form.default.enabled')],
                ['value' => 0, 'label' => trans('theme::form.default.disabled')]
            ]);

            app('scripts')->addMessage('theme::form');
        @endphp

        @include('theme::partials/head')

    </head>
    <body class="th-index {{ request()->get('dark') ? 'th-dark' : 'th-light' }}">

        @include('theme::partials/notification')

        <div id="app">

            <div class="th-index-header">

                <div class="th-navbar">
                    <div class="uk-container uk-container-expand">
                        <div class="uk-navbar">

                            <div class="uk-navbar-left">
                                <div class="uk-navbar-item uk-logo uk-margin-large-right">
                                    <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="80" height="20" :uk-svg="true">
                                </div>
                            </div>

                            <div class="uk-navbar-right">
                                @include('theme::menus/default', [
                                    'menus' => app('menus')->getMenusByTypeId(2)->toTree(), 'style' => 'uk-navbar-nav uk-margin-large-right'
                                ])
                                <ul class="uk-navbar-nav uk-text-small">
                                    <li>
                                        <a class="uk-inline" href="{{ route('liro-users.auth.login') }}">
                                            <img class="uk-border-circle uk-margin-small-right" src="https://api.adorable.io/avatars/50/{{ app('users')->getId() }}" width="25" height="25" alt="">
                                            <span>{{ app('users')->getName() }}</span>
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
