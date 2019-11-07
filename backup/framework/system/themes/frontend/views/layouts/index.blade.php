<html lang="{{ app()->getLocale() }}">
<head>

    <title>
        {{ app('cms')->getMenuAttr('title') . ' | ' . app('cms')->getDomainAttr('title') }}
    </title>

    @include('partials/head')
</head>
<body class="app-index">

    @include('liro-frontend::partials/notification')

    <div id="app">
        @yield('content')
    </div>

</body>
</html>
