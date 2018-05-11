@if ( auth()->user()->hasRoute($menu->package) && $menu->state && !$menu->hidden )
    <li class="{{ $menu->active ? 'uk-active' : '' }}">
        <a href="{{ url($menu->prefixRoute) }}">{{ $menu->title_fix }}</a>
        @if ( count($menu->children) )
            @if ( $menu->isRoot() )
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        @foreach ($menu->children as $menu)
                            @include('liro-backend::partials/menu', $menu)
                        @endforeach
                    </ul>
                </div>
            @else
                <ul class="uk-list">
                    @foreach ($menu->children as $menu)
                        @include('liro-backend::partials/menu', $menu)
                    @endforeach
                </ul>
            @endif
        @endif
    </li>
@endif
