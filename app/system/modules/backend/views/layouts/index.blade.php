<html lang="{{ app()->getLocale() }}">
<head>
    @php
        $defaultUrl = app('cms')->getDomainAttr('route');
    @endphp

    @include('liro-backend::partials/head')

</head>
<body class="app-page">

    @include('liro-backend::partials/notification')

    <div id="app">

        <app-layout>
            @yield('content')
        </app-layout>

        <portal to="menubar-left" :order="100">
            <app-nav-item class="margin-20--right">
                <app-nav-link href="{{ url($defaultUrl ?: '/') }}">
                    <img src="{{ asset('liro-backend::dist/images/liro-negative.svg') }}" alt="" width="80" height="20">
                </app-nav-link>
            </app-nav-item>
        </portal>

        <portal to="menubar-left" :order="200">

        </portal>

        <portal to="menubar-right" :order="100">
            <app-nav-item size="small">
                <app-nav-dropdown :width="320">
                    <el-badge is-dot>
                        <app-nav-link><i class="el-icon-bell"></i></app-nav-link>
                    </el-badge>
                    <app-component slot="dropdown" element="liro-user-notification" />
                </app-nav-dropdown>
            </app-nav-item>
        </portal>

        <portal to="menubar-right" :order="200">
            <app-nav-item size="small">
                <app-nav-dropdown>
                    <app-nav-link></app-nav-link>
                    <ul class="nav__dropdown-nav" slot="dropdown">
                        <app-nav-item>
                            <app-nav-link href="{{ route('liro-users.admin.auth.login') }}">
                                {{ trans('liro-users::form.auth.edit') }}
                            </app-nav-link>
                        </app-nav-item>
                        <app-nav-item>
                            <app-nav-link href="{{ route('liro-users.admin.auth.logout') }}">
                                {{ trans('liro-users::form.auth.logout') }}
                            </app-nav-link>
                        </app-nav-item>
                    </ul>
                </app-nav-dropdown>
            </app-nav-item>
        </portal>

        <portal to="toolbar-left" :order="100">
            <app-nav-item>
                <h4 class="text--primary text--light">asdasd</h4>
            </app-nav-item>
        </portal>

    </div>

</body>
</html>
