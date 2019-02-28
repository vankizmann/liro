<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Debug</title>
    @php
        asset()->script('script', 'liro-backend::resources/dist/js/script.js');
        echo asset()->output();
    @endphp
</head>
<body>
    <div style="max-width: 900px; margin: 20px auto;">
        <div>
            @yield('content')
        </div>
    </div>
</body>
</html>
