<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ app('web.menu')->getMenu('title') }}</title>

    <style>
        body {
            font-family: 'Helvetica Neue', 'Arial', sans-serif;
            color: #FFFFFF;
            background: #BFD5E2;
        }

        .container {
            width: 100%;
            max-width: 800px;
            padding: 20px;
            margin: 80px auto;
        }
    </style>
</head>
<body>
    <div class="container">
        @yield('content')
    </div>
</body>
</html>
