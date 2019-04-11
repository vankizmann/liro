<html lang="{{ app()->getLocale() }}">
<head>

    @php
        $defaultUrl = app('cms')->getDomainAttr('route');
    @endphp

    @include('partials/head')

    <title>{{ trans(app('cms')->getMenuAttr('title')) . ' | ' . config('app.name') }}</title>

    @php
        asset()->script('jquery', '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js');

        echo asset()->output([
            'style', 'locale', 'route', 'store', 'export', 'script'
        ]);
    @endphp

</head>
<body class="app app__index">
    <div id="app" class="app__viewport">
        <div class="app__layout grid grid--col">

            <div sx-test="text: 'attribute huh;:u lol'">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda pariatur quisquam reiciendis totam? Aut dolore eos eveniet laboriosam officiis! Accusamus atque, autem ducimus inventore ipsa maxime officia possimus veniam?
            </div>
            <div ui-test="text: '...'">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda pariatur quisquam reiciendis totam? Aut dolore eos eveniet laboriosam officiis! Accusamus atque, autem ducimus inventore ipsa maxime officia possimus veniam?
            </div>

            <header class="app__header">
                <nav>
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
