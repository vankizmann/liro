@if ( auth()->user()->hasRoute($menu->package) && $menu->state && !$menu->hidden )
    <li class="{{ $menu->active ? 'uk-active' : '' }}">
        <a href="{{ url($menu->prefixRoute) }}">{{ $menu->title_fix }}</a>
    </li>
@endif
