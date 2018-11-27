<html lang="{{ app()->getLocale() }}">
    <head>
        @include('theme::partials/head')
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
