<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ app('web.menu')->getMenu('title') }}</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css">
</head>
<body>
    @if( session()->has('error') )
        <div class="error" style="color: red;">
            {{ session()->get('error') }}
        </div>
    @endif
    <div class="container">
        @yield('content')
    </div>
</body>
</html>
