<html lang="{{ app()->getLocale() }}">
<head>

    <title>
        {{ trans('404 Not Found') . ' | ' . app('cms')->getDomainAttr('title') }}
    </title>

    @include('partials/head')
</head>
<body class="app-error">

    @include('liro-frontend::partials/notification')

    <div id="app">
        Page not fount :(
    </div>

</body>
</html>
