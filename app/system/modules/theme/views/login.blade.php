<html lang="{{ app()->getLocale() }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

        <title>{{ app()->getTitleWithAffix() }}</title>

        @php
            app('scripts')->addLink('theme-script', 'theme::dist/js/script.js');
            echo app('scripts')->output();
        @endphp

        @php
            app('styles')->addLink('theme-style', 'theme::dist/css/style.css');
            echo app('styles')->output();
        @endphp

    </head>
    <body class="th-login">

        @include('theme::partials/notification')

        <div class="th-login-body uk-flex uk-flex-center uk-flex-middle" id="app">
            <div class="th-login-form uk-padding {{ session()->has('message') ? 'uk-animation-shake' : '' }}">

                <div class="uk-flex uk-flex-center uk-margin-large-bottom">
                    <span class="uk-logo">
                        <img src="/app/system/modules/theme/resources/dist/images/liro.svg" width="160" height="40" uk-svg>
                    </span>
                </div>
                
                <div class="th-login-content">
                    @yield('content')
                </div>

            </div>
        </div>

    </body>
</html>
