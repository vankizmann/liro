<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ isset($title) ? $title . ' | Liro CMS' : 'Liro CMS'}}</title>
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">

        @php
            app('styles')->link('theme', 'liro.theme:resources/dist/css/theme.css');
            echo app('styles')->get();
        @endphp

        @php
            app('scripts')->link('theme', 'liro.theme:resources/dist/js/theme.js');
            echo app('scripts')->get();
        @endphp
        
    </head>
    <body>

        <div id="app" class="uk-offcanvas-content">

            <!-- Header start -->
            <header id="uk-header">

                <!-- Navigation start -->
                <div class="uk-navigation uk-background-primary uk-light">
                    <nav class="uk-navbar-container uk-container uk-container-expand uk-navbar-transparent" uk-navbar>
                        <div class="uk-navbar-left">

                            <!-- App logo start -->
                            <div class="uk-navbar-item uk-logo">
                                <a href="/">
                                    <img src="/app/modules/theme/resources/dist/img/liro.svg" alt="{{ env('APP_NAME') }}" width="37" height="37">
                                </a>
                            </div>
                            <!-- App logo end -->

                            <!-- Main menu start -->
                            <ul class="uk-navbar-nav">
                                @foreach( app('menus')->all()->where('menu_type_id', 1) as $menu )
                                    <li><a href="{{ url($menu->prefixRoute) }}">{{ $menu->title }}</a></li>
                                @endforeach
                            </ul>
                            <!-- Main menu end -->

                        </div>
                        <div class="uk-navbar-right">

                            <!-- User menu start -->
                            <ul class="uk-navbar-nav">
                                @foreach( app('menus')->all()->where('menu_type_id', 2) as $menu )
                                    <li><a href="{{ url($menu->prefixRoute) }}">{{ $menu->title }}</a></li>
                                @endforeach
                            </ul>
                            <!-- User menu end -->
                            
                        </div>
                    </nav>
                </div>
                <!-- Navigation end -->

                <!-- Toolbar start -->
                <div class="uk-toolbar" :uk-sticky="'show-on-up: true; animation: uk-animation-slide-top'" v-cloak>
                    <div class="uk-navbar-container uk-container uk-container-expand" uk-navbar>
                        @hasSection('toolbar')
                            @yield('toolbar')
                        @else
                            <div class="uk-navbar-left">
                                <portal-target class="uk-navbar-nav" name="app-toolbar-left" multiple></portal-target>
                            </div>
                            <div class="uk-navbar-right">
                                <portal-target class="uk-navbar-nav" name="app-toolbar-right" multiple></portal-target>
                            </div>
                        @endif
                    </div>
                </div>
                <!-- Toolbar end -->
                
            </header>
            <!-- Header end -->

            <!-- Main start -->
            <main id="uk-main" style="padding: 30px 0;" v-cloak>
                <div class="uk-container uk-container-expand">
                    @if ( session()->has('error') )
                        <div class="uk-alert uk-alert-danger">{{ session('error') }}</div>
                    @endif
                    @if ( session()->has('message') )
                        <div class="uk-alert uk-alert-primary">{{ session('message') }}</div>
                    @endif
                    @yield('content')
                </div>
            </main>
            <!-- Main end -->

        </div>
    </body>
</html>
