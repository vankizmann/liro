<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ isset($title) ? $title . ' | Liro CMS' : 'Liro CMS'}}</title>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">

        @php
            app('styles')->link('theme', 'liro-theme:resources/dist/css/theme.css');
            echo app('styles')->get();
        @endphp

        @php
            app('scripts')->link('theme', 'liro-theme:resources/dist/js/theme.js');
            echo app('scripts')->get();
        @endphp

    </head>
    <body class="login">

        <div id="app" class="uk-offcanvas-content uk-background-primary">
            <div class="uk-container uk-container-expand uk-flex uk-flex-center uk-flex-middle" style="min-height: 100vh;">
                    <div class="uk-padding uk-background-default" style="width: 100%; max-width: 400px;">
                        @if ( session()->has('error') )
                            <div class="uk-alert uk-alert-danger">{{ session('error') }}</div>
                        @endif
                        @if ( session()->has('message') )
                            <div class="uk-alert uk-alert-primary">{{ session('message') }}</div>
                        @endif
                        @yield('content')
                    </div>
            </div>
        </div>

    </body>
</html>
