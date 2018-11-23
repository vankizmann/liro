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
    <body class="th-frame">

        @include('theme::partials/notification')

        <div class="th-frame-body" id="app">
            <div class="th-frame-content">
                @yield('content')
            </div>
        </div>

        <script>
            Vue.ready(function () {
                if ( window.parent.setHeight != undefined ) {
                    window.parent.setHeight('.th-iframe', $('body').height());
                }
            });
        </script>

    </body>
</html>
