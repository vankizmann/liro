@php

$html_id = isset($id) ? ' id="' . $id . '"' : '';
unset($id);

$html_class = isset($class) ? ' class="' . $class . '"' : ' class="uk-nav"';
unset($class);

$input_icon = isset($icon) ? $icon : false;
unset($icon);

@endphp
<ul {!! $html_id . $html_class !!}>
    @foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
        <li class="{{ $menu->route_current ? 'uk-current' : '' }} {{ $menu->route_active ? 'uk-active' : '' }}">

            <a class="uk-flex uk-flex-middle" href="{{ $menu->hasChildren() ? 'javascript:void(0)' : url($menu->route_prefix) }}">
                <span class="uk-navbar-text uk-margin-small-right">
                    {{ trans($menu->title) }}
                </span>
                @if ($input_icon && $menu->icon)
                    <i class="uk-margin-auto-left" uk-icon="{{ $menu->icon }}"></i>
                @endif
            </a>

            @if ( $menu->children()->enabled()->visible()->count() )
                @include('theme::menus/default' , [
                    'menus' => $menu->children
                ])
            @endif

        </li>
    @endforeach
</ul>
