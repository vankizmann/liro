@php

$input_icon = isset($icon) ? $icon : false;
unset($icon);

@endphp
@foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
    <li class="{{ $menu->route_current ? 'uk-current' : '' }} {{ $menu->route_active ? 'uk-active' : '' }}">

        <a class="uk-navbar-item uk-flex-left uk-flex-middle" href="{{ url($menu->route_prefix) }}">
            @if ($input_icon && $menu->icon)
                <i class="uk-margin-right" uk-icon="{{ $menu->icon }}"></i>
            @endif
            <span class="uk-navbar-text">
                {{ trans($menu->title) }}
            </span>
            
        </a>

        @if ( $menu->children()->enabled()->visible()->count() )
            <ul class="uk-nav">
                @include('theme::menus/default' , [
                    'menus' => $menu->children
                ])
            </ul>
        @endif

    </li>
@endforeach
