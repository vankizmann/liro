@php
    $depth = isset($depth) ? $depth + 1 : 0
@endphp

@if ( $childs = $menus->where('state', 1)->where('hide', 0) )
    <ul class="grid grid--row grid--10">
        @foreach ( $childs as $menu )
            <li class="col--flex-0 {{ $menu->active ? 'is-active' : '' }}">

                <a href="{{ url($menu->route) }}">
                    {{ trans($menu->title) }} {{ $depth }}
                </a>

                @include('menus/index', [
                    'menus' => $menu->children, 'layer' => $depth
                ])

            </li>
        @endforeach
    </ul>
@endif

