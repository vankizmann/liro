<html lang="{{ app()->getLocale() }}">
    <head>
        @php
            app('assets')->locale('theme');
        @endphp

        @include('theme::partials/head')
    </head>
    <body class="th-login">

        @include('theme::partials/notification')

        <div class="th-login__frame grid grid--row grid--center grid--middle" id="app">

            <div class="th-login__background">
                <img src="{{ app('assets')->file('theme::dist/images/background.jpg') }}">
            </div>

            <div class="th-login__form grid grid--col">

                <div class="th-login__logo">
                    <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="140" height="35">
                </div>
                
                <div class="th-login__body">
                    @yield('content')
                </div>

            </div>
        </div>

    </body>
</html>
