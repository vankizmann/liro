<html lang="{{ app()->getLocale() }}">
    <head>
        @include('theme::partials/head')
    </head>
    <body class="th-error">

        @include('theme::partials/notification')

        <div class="th-error-body uk-flex uk-flex-center uk-flex-middle" id="app">
            <div class="th-error-form uk-padding">

                <div class="uk-flex uk-flex-center uk-margin-large-bottom">
                    <span class="uk-logo">
                        <img src="{{ app('assets')->file('theme::dist/images/liro.svg') }}" width="160" height="40" uk-svg>
                    </span>
                </div>

                <div class="th-error-content">
                    <div class="uk-text-center">
                        <h2>@yield('title')</h2>
                        <p class="uk-text-muted">@yield('message')</p>
                    </div>
                </div>

            </div>
        </div>

    </body>
</html>
