<html lang="{{ $locale }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Liro Backend</title>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">
        {!! Asset::css() !!}
        {!! Asset::js() !!}
    </head>
    <body class="login">

        <div id="app" class="uk-offcanvas-content uk-background-muted">
            <div class="uk-container uk-container-expand uk-flex uk-flex-center uk-flex-middle" style="min-height: 100vh;">
                    <div class="uk-padding uk-background-default" style="width: 100%; max-width: 400px;">
                        @if (session('error'))
                            <el-alert title="{{ session('error') }}" type="error"></el-alert>
                        @endif
                        @yield('content')
                    </div>
            </div>
        </div>

    </body>
</html>