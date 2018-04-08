<html lang="{{ $locale }}">
    <head>
        <title>Liro Backend</title>
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">
        {!! Asset::getCss() !!}
    </head>
    <body class="login">

        <div id="app" class="main row-flex align-center align-middle">
            <div class="login-body col-2-10">
                @if (session('error'))
                    <el-alert title="{{ session('error') }}" type="error"></el-alert>
                @endif
                @yield('content')
            </div>
        </div>
        
        {!! Asset::getJs() !!}
    </body>
</html>