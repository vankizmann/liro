<html lang="{{ app()->getLocale() }}">
    <head>
        @include('theme::partials/head')
    </head>
    <body class="th-login">

        @include('theme::partials/notification')

        <div class="th-login-body uk-flex uk-flex-center uk-flex-middle" id="app">
            <div class="th-login-form uk-padding">

                <div class="uk-flex uk-flex-center uk-margin-large-bottom">
                    <span class="uk-logo">
                        <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="160" height="40" uk-svg>
                    </span>
                </div>
                
                <div class="th-login-content">
                    @yield('content')
                </div>

            </div>
        </div>

    </body>
</html>
