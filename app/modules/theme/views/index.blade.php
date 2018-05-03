<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">

        <title>{{ isset($title) ? $title . ' | ' .  env('APP_NAME') :  env('APP_NAME') }}</title>

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

            <div id="app-module-help" uk-offcanvas="overlay: true; mode: push;">
                <div class="uk-offcanvas-bar">
                    <portal-target name="app-module-help" multiple></portal-target>
                </div>
            </div>

            <!-- Header start -->
            <header id="uk-header">

                <!-- Navigation start -->
                <div class="uk-navigation uk-gradient">
                    <nav class="uk-navbar-container uk-container uk-container-expand" uk-navbar>
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
                                @foreach( app('menus')->type(1)->toTree() as $menu )
                                    @include('backend::partials.menu', $menu)
                                @endforeach
                            </ul>
                            <!-- Main menu end -->

                        </div>
                        <div class="uk-navbar-right">

                            <!-- User menu start -->
                            <ul class="uk-navbar-nav">
                                @foreach( app('menus')->type(2)->toTree() as $menu )
                                    @include('backend::partials.menu', $menu)
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
