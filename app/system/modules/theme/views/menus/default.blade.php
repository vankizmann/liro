<ul class="{{ @$style ?: 'uk-nav' }}">
    @foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
        <li class="{{ $menu->route_current ? 'uk-current' : '' }} {{ $menu->route_active ? 'uk-active' : '' }}">

            <a href="{{ url($menu->route_prefix) }}">
                @if ($menu->icon)
                    <i class="uk-margin-small-right" uk-icon="{{ $menu->icon }}"></i>
                @endif
                <span class="uk-navbar-text">
                    {{ trans($menu->title) }}
                </span>
            </a>

            @if ( $menu->children()->enabled()->visible()->count() )
                @include($menu->isRoot() ? 'theme::menus/dropdown' : 'theme::menus/default', [
                    'menus' => $menu->children, 'style' => null
                ])
            @endif

        </li>
    @endforeach
</ul>
