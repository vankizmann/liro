
@foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
    <li class="{{ $menu->route_current ? 'uk-current' : '' }} {{ $menu->route_active ? 'uk-active' : '' }}">

        <a href="{{ url($menu->route_prefix) }}">
            @if ($menu->icon)
                <img class="uk-navbar-icon" src="{{ $menu->icon }}" alt="{{ trans($menu->title) }}">
            @endif
            <span class="uk-navbar-text">
                {{ trans($menu->title) }}
            </span>
        </a>

        @if ( $menu->children()->enabled()->visible()->count() )
            <div class="uk-navbar-dropdown" uk-dropdown>
                <ul class="uk-nav uk-navbar-dropdown-nav">
                    @include('theme::partials/menus-children', [
                        'menus' => $menu->children
                    ])
                </ul>
            </div>
        @endif

    </li>
@endforeach
