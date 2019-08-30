<html lang="{{ app()->getLocale() }}">
<head>
    @include('partials/head')
</head>
<body class="app-index">

    @include('liro-frontend::partials/notification')

    <div id="app">
        Nice!
        @yield('content')
    </div>

</body>
</html>
