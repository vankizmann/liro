<html lang="{{ app()->getLocale() }}">
    <head>

        @php
            $defaultUrl = app('cms')->getDomainAttr('route');
        @endphp

        @include('liro-backend::partials/head')

        <title>{{ trans(app('cms')->getMenuAttr('title')) . ' | ' . config('app.name') }}</title>

    </head>
    <body class="app-login">

        @include('liro-backend::partials/notification')

        <div class="app-login__frame grid grid--row grid--center grid--middle" id="app">

            <div class="app-login__background">
                <img src="{{ asset('liro-backend::dist/images/background.jpg') }}">
            </div>

            <div class="app-login__form grid grid--col">

                <div class="app-login__logo">
                    <img src="{{ asset('liro-backend::dist/images/liro.svg') }}" width="140" height="35">
                </div>
                
                <div class="app-login__body">
                    @yield('content')
                </div>

            </div>
        </div>

    </body>
</html>
