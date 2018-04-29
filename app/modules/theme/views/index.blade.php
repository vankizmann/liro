<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ isset($title) ? $title . ' | Liro CMS' : 'Liro CMS'}}</title>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">
    </head>
    <body>

        <div id="app" class="uk-offcanvas-content">

            <!-- Header start -->
            <header id="uk-header">
                <div class="uk-navigation uk-background-primary uk-light">
                    <nav class="uk-navbar-container uk-container uk-container-expand uk-navbar-transparent" uk-navbar>
                        <div class="uk-navbar-left">
                            <div class="uk-navbar-item uk-logo">
                                <a href="/">
                                    <img src="/app/modules/theme/assets/dist/img/liro.svg" alt="{{ env('APP_NAME') }}" width="37" height="37">
                                </a>
                            </div>
                            <ul class="uk-navbar-nav">
                                <!-- Menu -->
                            </ul>
                        </div>
                        <div class="uk-navbar-right">
                            <ul class="uk-navbar-nav">
                                <!-- User -->
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- Header end -->

            <!-- Main start -->
            <main id="uk-main" style="padding: 30px 0;" v-cloak>
                <div class="uk-container uk-container-expand">
                    @if ( session()->has('message') )
                        <div class="alert alert-info">{{ session()->get('message') }}</div>
                    @endif
                    @yield('content')
                </div>
            </main>
            <!-- Main end -->

        </div>
    </body>
</html>
