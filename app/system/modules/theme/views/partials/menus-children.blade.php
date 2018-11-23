@foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
    <li class="{{ $menu->route_current ? 'uk-current' : '' }} {{ $menu->route_active ? 'uk-active' : '' }}">
        <a href="{{ url($menu->route_prefix) }}">
            {{ trans($menu->title) }}
        </a>
    </li>
@endforeach

