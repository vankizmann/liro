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
        
    </head>
    <body>

        <!-- Loader start -->
        <div class="uk-ajax-load">
            <div class="uk-spinner" uk-spinner="ratio: 3;"></div>
        </div>
        <!-- Loader end -->

        <script>

            liro.listen('ajax.load', function() {
                $('.uk-ajax-load').queue(() => {
                    $('.uk-ajax-load').addClass('uk-active').dequeue();
                }).animate({
                    opacity: 1
                }, 300);
            });

            liro.listen('ajax.done', function() {
                $('.uk-ajax-load').animate({
                    opacity: 0
                }, 300).queue(() => {
                    $('.uk-ajax-load').removeClass('uk-active').dequeue();
                });
            });
        
            liro.listen('ajax.error', function() {
                $('.uk-ajax-load').animate({
                    opacity: 0
                }, 300).queue(() => {
                    $('.uk-ajax-load').removeClass('uk-active').dequeue();
                });
            });


        </script>

        <div id="app" class="uk-offcanvas-content">

            <!-- Help start -->
            <div id="app-module-help" uk-offcanvas="overlay: true; mode: push;">
                <div class="uk-offcanvas-bar">
                    <portal-target name="app-module-help" multiple></portal-target>
                </div>
            </div>
            <!-- Help end -->

            <div class="app-frame">
                <div class="app-navigation">

                    <!-- Main menu subitems start -->
                    <ul class="uk-list">
                        @foreach( app('menus')->currentRoot()->children()->getEnabled()->get() as $menu )
                            @include('liro-backend::partials/menu-item', $menu)
                        @endforeach
                    </ul>
                    <!-- Main menu subitems end -->

                </div>
            </div>

            <!-- Header start -->
            <header id="uk-header">

                <!-- Navigation start -->
                <div class="uk-navigation">
                    <div class="uk-flex">

                        <div class="uk-flex-auto">

                            <nav class="uk-navbar-container uk-container uk-container-expand" uk-navbar>
                                <div class="uk-navbar-left">

                                    <!-- Main menu start -->
                                    <ul class="uk-navbar-nav">
                                        @foreach( app('menus')->type(1)->toTree() as $menu )
                                            @include('liro-backend::partials/menu-item', $menu)
                                        @endforeach
                                    </ul>
                                    <!-- Main menu end -->

                                </div>
                                <div class="uk-navbar-right">

                                    <!-- User menu start -->
                                    <ul class="uk-navbar-nav">
                                        @foreach( app('menus')->type(2)->toTree() as $menu )
                                            @include('liro-backend::partials/menu-item', $menu)
                                        @endforeach
                                    </ul>
                                    <!-- User menu end -->
                                    
                                </div>
                            </nav>
                            <nav class="uk-infobar-container uk-container uk-container-expand" uk-navbar>
                                <div class="uk-navbar-left">

                                    <!-- Main menu subitems start -->
                                    <ul class="uk-navbar-nav">
                                        @foreach( app('menus')->currentRoot()->children()->getEnabled()->get() as $menu )
                                            @include('liro-backend::partials/menu-item', $menu)
                                        @endforeach
                                    </ul>
                                    <!-- Main menu subitems end -->

                                </div>
                                <div class="uk-navbar-right">
                                    <portal-target class="uk-navbar-nav" name="app-infobar-action" multiple></portal-target>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- Navigation end -->

                <!-- Toolbar start -->
                <div class="uk-toolbar" :uk-sticky="'show-on-up: true; animation: uk-animation-slide-top'" v-cloak>
                    <div class="uk-toolbar-container uk-container uk-container-expand" uk-navbar>
                        <div class="uk-navbar-left">
                            <portal-target class="uk-navbar-nav" name="app-toolbar-left" multiple></portal-target>
                        </div>
                        <div class="uk-navbar-right">
                            <portal-target class="uk-navbar-nav" name="app-toolbar-right" multiple></portal-target>
                        </div>
                    </div>
                </div>
                <!-- Toolbar end -->
                
            </header>
            <!-- Header end -->

            <!-- Main start -->
            <main id="uk-main" style="padding: 30px 0;" v-cloak>
                <div class="uk-container uk-container-expand">
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
            </main>
            <!-- Main end -->

            @php
                app('scripts')->link('theme', 'liro-backend:resources/dist/js/theme.js');
                echo app('scripts')->get();
            @endphp

        </div>
    </body>
</html>
