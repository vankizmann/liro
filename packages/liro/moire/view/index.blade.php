<html lang="{{ $locale }}">
    <head>
        <title>Liro Backend</title>
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">
        {!! Asset::css() !!}
    </head>
    <body>

        <div id="app" class="main row-flex flex-column align-stretch">
            <div class="header row-flex flex-0">
                <div class="header--logo">
                    <a href="{{ route('home.index') }}">
                        <img src="{{ url('/packages/liro/moire/resource/dist/img/liro.svg') }}" alt="Liro CMS">
                    </a>
                </div>
                <div class="header--nav row-flex">
                    <ul class="row-flex">
                        <li class="row-flex">
                            <a href="{{ route('menus.index') }}" class="row-flex align-middle"><i class="fas fa-bars"></i></i>{{ __('*.menu.menus') }}</a>
                        </li>
                        <li class="row-flex">
                            <a href="{{ locale_route(null, 'de') }}" class="row-flex align-middle"><i class="fas fa-copy"></i>Pages</a>
                        </li>
                        <li class="row-flex is-active">
                            <a href="{{ route('languages.index') }}" class="row-flex align-middle"><i class="fas fa-language"></i></i>{{ __('*.language.languages') }}</a>
                        </li>
                    </ul>
                </div>
                <div class="header--user row-flex pull-right">
                    <a href="{{ route('logout') }}" class="row-flex align-middle"></i>@lang('*.user.logout')</a>
                </div>
            </div>
            <div class="toolbar row-flex flex-0">
                @yield('toolbar')
            </div>
            <div class="body row-flex flex-1">
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
        </div>
        {!! Asset::js() !!}
    </body>
</html>