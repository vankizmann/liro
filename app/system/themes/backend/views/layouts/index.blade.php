<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>

    @php
        $defaultUrl = app('cms')->getDomainAttr('route');
    @endphp

    @include('partials/head')

    <title>{{ trans(app('cms')->getMenuAttr('title')) . ' | ' . config('app.name') }}</title>

    @php
        asset()->script('lodash', '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js');
        asset()->script('jquery', '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js');
        asset()->script('velocity', '//cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js');

        echo asset()->output([
            'style', 'locale', 'route', 'store', 'export', 'script'
        ]);
    @endphp

</head>
<body class="app app__index">
    <div id="app" class="app__viewport">
        <div class="app__layout">

            <header class="app__header">
                <div class="col col--flex-auto grid grid--row grid--20">

                    <div class="col col--flex-0 grid grid--row">
                        <a class="col grid grid--row grid--middle" href="{{ url(app('cms')->getDomainAttr('route')) }}">
                            <img src="{{ asset('liro-backend::dist/images/liro-negative.svg') }}" width="80" height="20">
                        </a>
                    </div>

                    <nav class="col col--flex-0 grid grid--row" js-nav="bindMode: hover;">
                        @include('menus/index', [
                            'menus' => Web::getDomainAttr('menus')
                        ])
                    </nav>

                </div>

            </header>

            <section class="app__toolbar">

            </section>

            @include('partials/notification')

            <main class="app__main">
                @yield('content')
            </main>

            <footer class="app__footer">
                <div class="col col--flex-1 grid grid--row grid-20">
                    <div class="col col--auto col--left grid grid--row grid--middle">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div class="col col--auto col--right grid grid--row grid--middle">
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>

            </footer>

        </div>
    </div>
</body>
</html>
