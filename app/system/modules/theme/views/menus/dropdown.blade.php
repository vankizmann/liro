<div class="uk-navbar-dropdown" uk-dropdown>
    <ul class="{{ @$style ?: 'uk-nav uk-navbar-dropdown-nav' }}">
        @foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
            <li class="{{ $menu->route_current ? 'uk-current' : '' }} {{ $menu->route_active ? 'uk-active' : '' }}">

                <a href="{{ url($menu->route_prefix) }}">
                    <span class="uk-navbar-text">
                        {{ trans($menu->title) }}
                    </span>
                </a>

                @if ( $menu->children()->enabled()->visible()->count() )
                    @include('theme::menus/default', [
                        'menus' => $menu->children, 'style' => null
                    ])
                @endif

            </li>
        @endforeach
    </ul>
</div>