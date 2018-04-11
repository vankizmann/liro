<html lang="{{ $locale }}">
    <head>
        <title>Liro Backend</title>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">
        {!! Asset::css() !!}
        {!! Asset::js(true) !!}
    </head>
    <body>

        <div class="uk-offcanvas-content" id="app">

            <header id="header">
                <div class="uk-navigation uk-background-primary uk-light">
                    <nav class="uk-navbar-container uk-container uk-container-expand uk-navbar-transparent" uk-navbar>
                        <div class="uk-navbar-left">

                            <ul class="uk-navbar-nav">
                                <li>
                                    <a href="{{ route('menus.index') }}">{{ __('*.menu.menus') }}</a>
                                </li>
                                <li class="uk-active">
                                    <a href="{{ route('languages.index') }}">{{ __('*.language.languages') }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('users.index') }}">{{ __('*.user.users') }}</a>
                                </li>
                            </ul>

                        </div>
                        <div class="uk-navbar-right">

                            <ul class="uk-navbar-nav">
                                <li>
                                    <a href="{{ route('logout') }}"></i>@lang('*.user.logout')</a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
                <div class="uk-toolbar" uk-sticky="show-on-up: true; animation: uk-animation-slide-top">
                    <div class="uk-navbar-container uk-container uk-container-expand" uk-navbar>
                        @yield('toolbar')
                    </div>
                </div>
            </header>

            <main id="main">
                <div class="uk-container uk-container-expand">
                    <div class="body--content @hasSection('sidebar') col-6-12 col-lg-9-12 @else col-12-12 @endif">
                        <div class="body--space">
                            @if (session('error'))
                                <span class="invalid-feedback">
                                    <strong>{{ session('error') }}</strong>
                                </span>
                            @endif
                            @yield('content')
                        </div>
                    </div>
                    @hasSection('sidebar')
                        <div class="body--sidebar col-6-12 col-lg-3-12">
                            <div class="body--space">
                                @yield('sidebar')
                            </div>
                        </div>
                    @endif
                </div>
            </main>

        </div>
        {!! Asset::js() !!}
    </body>
</html>