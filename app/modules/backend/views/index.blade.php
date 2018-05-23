<html lang="{{ app()->getLocale() }}">
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/fontawesome.css">
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.8/css/solid.css">

        <title>{{ isset($title) ? $title . ' | ' .  env('APP_NAME') :  env('APP_NAME') }}</title>

        @php
            app('styles')->link('theme', 'liro-backend:resources/dist/css/theme.css');
            echo app('styles')->get();
        @endphp

        @php
            app('scripts')->link('theme', 'liro-backend:resources/dist/js/theme.js');
            echo app('scripts')->get();
        @endphp
        
    </head>
    <body>

        <!-- Loader start -->
        <div class="uk-ajax-load">
            <div class="uk-spinner" uk-spinner="ratio: 3;"></div>
        </div>
        <!-- Loader end -->

        <script>

            liro.event.$watch('axios.load', function() {
                $('.uk-ajax-load').queue(() => {
                    $('.uk-ajax-load').addClass('uk-active').dequeue();
                }).animate({
                    opacity: 1
                }, 300);
            });

            liro.event.$watch('axios.done', function() {
                $('.uk-ajax-load').animate({
                    opacity: 0
                }, 300).queue(() => {
                    $('.uk-ajax-load').removeClass('uk-active').dequeue();
                });
            });
        
            liro.event.$watch('axios.error', function() {
                $('.uk-ajax-load').animate({
                    opacity: 0
                }, 300).queue(() => {
                    $('.uk-ajax-load').removeClass('uk-active').dequeue();
                });
            });


        </script>

        <div id="app" class="uk-offcanvas-content" style="min-height: 100vh;">

            <!-- Help start -->
            <div id="app-module-help" uk-offcanvas="overlay: true; mode: push;">
                <div class="uk-offcanvas-bar">
                    <portal-target name="app-module-help" multiple></portal-target>
                </div>
            </div>
            <!-- Help end -->

            <header class="app-header">

                <nav class="app-navigation uk-flex">
                    <div class="uk-flex-pull-left">

                        <!-- Main menu start -->
                        <ul class="uk-navbar-nav">
                            @foreach( app('menus')->type(1)->toTree() as $menu )
                                @include('liro-backend::partials/menu-item', $menu)
                            @endforeach
                        </ul>
                        <!-- Main menu end -->

                    </div>
                    <div class="uk-flex-pull-right">

                        <!-- User menu start -->
                        <ul class="uk-navbar-nav">
                            @foreach( app('menus')->type(2)->toTree() as $menu )
                                @include('liro-backend::partials/menu-item', $menu)
                            @endforeach
                        </ul>
                        <!-- User menu end -->
                        
                    </div>
                </nav>

                <nav class="app-infobar uk-flex">

                    <!-- Main menu subitems start -->
                    <div class="uk-flex-pull-left">
                        <ul class="uk-navbar-nav">
                            @foreach( app('menus')->currentRoot()->children()->getEnabled()->get() as $menu )
                                @include('liro-backend::partials/menu-item', $menu)
                            @endforeach
                        </ul>
                    </div>
                    <!-- Main menu subitems end -->

                    <div class="uk-flex-pull-right">

                        <!-- User menu start -->
                        <portal-target class="uk-navbar-nav" name="app-infobar-action" multiple></portal-target>
                        <!-- User menu end -->
                        
                    </div>
                </nav>

            </header>

            <nav class="app-toolbar uk-flex" :uk-sticky="'show-on-up: true; animation: uk-animation-slide-top'">

                <div class="uk-flex-pull-left">
                    <portal-target class="uk-list uk-flex" name="app-toolbar-left" multiple></portal-target>
                </div>

                <div class="uk-flex-pull-right">
                    <portal-target class="uk-list uk-flex" name="app-toolbar-right" multiple></portal-target>
                </div>

            </nav>

            <main class="app-body">

                <div class="app-content">
                    @if ( session()->has('error') )
                        <script>UIkit.notification('{{ session('error') }}', 'error');</script>
                    @endif
                    @if ( session()->has('success') )
                        <script>UIkit.notification('{{ session('success') }}', 'success');</script>
                    @endif
                    @if ( session()->has('message') )
                        <script>UIkit.notification('{{ session('message') }}', 'message');</script>
                    @endif
                    @yield('content')
                </div>
                
            </div>

        </main>

    </body>
</html>
