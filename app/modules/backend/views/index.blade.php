<html lang="{{ app()->getLocale() }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700">
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

        <div id="app" class="app-container uk-offcanvas-content" style="min-height: 100vh;">

            <!-- Help start -->
            <div id="app-module-help" uk-offcanvas="overlay: true; mode: push;">
                <div class="uk-offcanvas-bar">
                    <portal-target name="app-module-help" multiple></portal-target>
                </div>
            </div>
            <!-- Help end -->

            <header class="app-header">

                <nav class="app-navigation uk-flex uk-flex-middle">
                    <div class="uk-flex-pull-left">

                        <!-- Main menu start -->
                        <ul class="uk-navbar-list">
                            @foreach( app('menus')->type(1)->toTree() as $menu )
                                @include('liro-backend::partials/menu-item', $menu)
                            @endforeach
                        </ul>
                        <!-- Main menu end -->

                    </div>
                    <div class="uk-flex-pull-right">

                        <!-- User menu start -->
                        <ul class="uk-navbar-list">

                            <li>&#x1F44B; Moin {{ auth()->user()->name }}</li>

                            @foreach( app('menus')->type(2)->toTree() as $menu )
                                @include('liro-backend::partials/menu-item', $menu)
                            @endforeach
                        </ul>
                        <!-- User menu end -->
                        
                    </div>
                </nav>

                <nav class="app-infobar uk-flex uk-flex-middle">

                    <!-- Main menu subitems start -->
                    <div class="uk-flex-pull-left">
                        <ul class="uk-navbar-list">
                            @foreach( app('menus')->currentRoot()->children()->getEnabled()->get() as $menu )
                                @include('liro-backend::partials/menu-item', $menu)
                            @endforeach
                        </ul>
                    </div>
                    <!-- Main menu subitems end -->

                    <div class="uk-flex-pull-right">

                        <!-- User menu start -->
                        <portal-target class="uk-navbar-list" name="app-infobar-right" multiple></portal-target>
                        <!-- User menu end -->
                        
                    </div>
                </nav>

                <nav class="app-toolbar uk-flex" uk-sticky>

                    <div class="uk-flex-pull-left">
                        <portal-target class="uk-navbar-list" name="app-toolbar-left" multiple></portal-target>
                    </div>

                    <div class="uk-flex-pull-right">
                        <portal-target class="uk-navbar-list" name="app-toolbar-right" multiple></portal-target>
                    </div>

                </nav>

            </header>

            <main class="app-body uk-flex">

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

                <portal-target class="app-preview" name="app-module-preview" multiple></portal-target>
                
            </div>

        </main>

    </body>
</html>
