<?php
use Liro\System\Cms\Helpers\RouteHelper;
?>
<!doctype html>
<html lang="{{ App::getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    {{-- Page title--}}
    <title>Loading...</title>

    <script>
        window.baseTitle = '<?php echo Web::getDomainAttr('title'); ?>';
        window.basePath = '<?php echo RouteHelper::extractRoute(Web::getDomainAttr('route')); ?>';
    </script>

    @php
        asset()->style('theme', 'liro-backend::dist/css/index.css');
        asset()->script('theme', 'liro-backend::dist/js/index.js');
    @endphp

    {!! asset()->output(['style', 'export', 'route', 'locale', 'data', 'menu', 'script']) !!}

    <script>
        (function (Nano) {
            Nano.Data.set('theme', {
                'login': '{{ asset('liro-backend::src/images/login.svg') }}',
                'logout': '{{ asset('liro-backend::src/images/logout.svg') }}',
                'error': '{{ asset('liro-backend::src/images/error.svg') }}',
            });
        })(Nano);
    </script>

</head>
<body class="app">
    <div id="app"></div>
</body>
</html>