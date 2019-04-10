<html lang="{{ app()->getLocale() }}">
<head>
    @include('partials/head')
</head>
<body class="app-login">

    @include('liro-frontend::partials/notification')

    <div id="app">
        @yield('content')
    </div>

</body>
</html>
