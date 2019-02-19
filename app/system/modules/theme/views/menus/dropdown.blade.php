@foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
    <app-nav-item
        :current="{{ $menu->route_current ? 'true' : 'false' }}"
        :active="{{ $menu->route_active ? 'true' : 'false' }}"
    >
        @if ( $menu->has_childs )
            <app-nav-dropdown>
        @endif
        <app-nav-link href="{{ $menu->has_childs ? 'javascript:void(0)' : url($menu->route_prefix) }}">
            {{ trans($menu->title) }}
        </app-nav-link>
        @if ( $menu->has_childs )
            <template slot="dropdown">
                <ul class="nav__dropdown-nav">
                    @include('theme::menus/default', [
                        'menus' => $menu->children
                    ])
                </ul>
            </template>
        @endif
        @if ( $menu->has_childs )
            </app-nav-dropdown>
        @endif
    </app-nav-item>
@endforeach
