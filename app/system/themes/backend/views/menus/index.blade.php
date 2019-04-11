@php
    $depth = isset($depth) ? $depth + 1 : 0
@endphp

@if ( $children = $menus->where('hide', 0)->where('state', 1) )
    <ul class="{{ $depth === 0 ? 'grid grid--row grid--10' : 'grid grid--col' }}">
        @foreach ( $children as $menu )
            <li class="nav__item col {{ $menu->active ? 'nav__item--active' : '' }}">

                <a href="{{ url($menu->route) }}">
                    {{ trans($menu->title) }}
                </a>

                @if ( $menu->children->count() )
                    @if ( $depth === 0 )
                        <div class="nav__dropdown">
                    @endif
                    @include('menus/index', [
                        'menus' => $menu->children, 'layer' => $depth
                    ])
                    @if ( $depth === 0 )
                        </div>
                    @endif
                @endif

            </li>
        @endforeach
    </ul>
@endif

