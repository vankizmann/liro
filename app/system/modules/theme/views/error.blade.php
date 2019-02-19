<html lang="{{ app()->getLocale() }}">
    <head>
        @include('theme::partials/head')
    </head>
    <body class="app-error">

        <div class="app-login__frame grid grid--row grid--center grid--middle" id="app">
            <div class="app-login__form grid grid--col">

                <div class="app-login__logo">
                    <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="140" height="35">
                </div>

                <div class="app-login__body text--center">
                    <h3 class="text--light">@yield('title')</h3>
                    <p class="text--muted">@yield('message')</p>
                </div>

            </div>
        </div>

    </body>
</html>
