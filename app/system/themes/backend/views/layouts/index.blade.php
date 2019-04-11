<html lang="{{ app()->getLocale() }}">
<head>

    @php
        $defaultUrl = app('cms')->getDomainAttr('route');
    @endphp

    @include('partials/head')

    <title>{{ trans(app('cms')->getMenuAttr('title')) . ' | ' . config('app.name') }}</title>

    @php
        asset()->script('jquery', '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js');
        asset()->script('velocity', '//cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js');

        echo asset()->output([
            'style', 'locale', 'route', 'store', 'export', 'script'
        ]);
    @endphp

</head>
<body class="app app__index">
    <div id="app" class="app__viewport">
        <div class="app__layout grid grid--col">

            <header class="app__header col grid grid--row grid--20">
                <nav class="col grid grid--row" js-nav>
                    @include('menus/index', [
                        'menus' => Web::getDomainAttr('menus')
                    ])
                </nav>
            </header>

            @include('partials/notification')

            <main class="app__main">
                @yield('content')
            </main>

        </div>
    </div>
</body>
</html>
