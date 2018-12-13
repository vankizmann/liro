<html lang="{{ app()->getLocale() }}">
    <head>
        @include('theme::partials/head')
    </head>
    <body class="th-login">

        @include('theme::partials/notification')

        <div class="th-login-body uk-flex uk-flex-center uk-flex-middle uk-position-relative" id="app">

            <div class="th-login-background uk-position-cover uk-cover-container">
                <img class="uk-blend-lighten" src="{{ app('assets')->file('theme::dist/images/background.jpg') }}" uk-cover>
            </div>

            <div class="th-login-form uk-position-z-index uk-padding">

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

        <div class="th-spinner uk-position-cover">
            <div class="uk-position-center" uk-spinner="icon: spinner-third; ratio: 0.125;"></div>
        </div>

    </body>
</html>
