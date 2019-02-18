@foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
    <theme-nav-item
        :current="{{ $menu->route_current ? 'true' : 'false' }}"
        :active="{{ $menu->route_active ? 'true' : 'false' }}"
    >
        @if ( $menu->has_childs )
        <theme-nav-dropdown>
        @endif
            <a href="{{ url($menu->route_prefix) }}">{{ trans($menu->title) }}</a>
            @if ( $menu->has_childs )
                <template slot="dropdown-top">
                    <h5 class="text-muted">{{ trans($menu->title) }}</h5>
                </template>
                <template slot="dropdown-left">
                    @foreach ($menu->children->where('state', 1)->where('hide', 0) as $menu)
                        <theme-nav-item
                            :current="{{ $menu->route_current ? 'true' : 'false' }}"
                            :active="{{ $menu->route_active ? 'true' : 'false' }}"
                        >
                            <a href="{{ url($menu->route_prefix) }}">{{ trans($menu->title) }}</a>
                        </theme-nav-item>
                    @endforeach
                </template>
            @endif
        @if ( $menu->has_childs )
        </theme-nav-dropdown>
        @endif
    </theme-nav-item>
@endforeach
