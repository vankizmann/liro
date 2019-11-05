<html lang="{{ app()->getLocale() }}">
    <head>

        @php
            $defaultUrl = app('cms')->getDomainAttr('route');
        @endphp

        @include('partials/head')

        <title>{{ $statusCode . ' | ' . config('app.name') }}</title>

    </head>
    <body class="app-error">

        <div class="app-error__frame grid grid--row grid--center grid--middle" id="app">
            <div class="app-error__form grid grid--col">

                <div class="app-error__logo">
                    <img src="{{ asset('liro-backend::dist/images/liro.svg') }}" width="140" height="35">
                </div>

                <div class="app-error__body text--center">
                    @switch ($statusCode)
                        @case(403)
                            @include('errors/403')
                        @break
                        @case(404)
                            @include('errors/404')
                        @break
                        @default
                            @include('errors/500')
                        @break
                    @endswitch
                </div>

            </div>
        </div>

    </body>
</html>
