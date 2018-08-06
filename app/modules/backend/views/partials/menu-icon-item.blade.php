@if ( auth()->user()->hasRoute($menu->module) && $menu->state && !$menu->hidden )
    <li class="{{ $menu->active ? 'uk-active' : '' }}">
        <a href="{{ url($menu->prefixRoute) }}"><span :uk-icon="'world'" class="uk-margin-small-right"></span>{{ $menu->title_fix }}</a>
    </li>
@endif
