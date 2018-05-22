@if ( auth()->user()->hasRoute($menu->package) && $menu->state && !$menu->hidden )
    <li class="{{ $menu->active ? 'uk-active' : '' }}">
         <a href="{{ url($menu->prefixRoute) }}"><span uk-icon="bolt" class="uk-text-primary"></span>{{ $menu->title_fix }}</a>
    </li>
@endif
