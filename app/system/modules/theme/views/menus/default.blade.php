@foreach ($menus->where('state', 1)->where('hide', 0) as $menu)
    <app-nav-item
        :current="{{ $menu->route_current ? 'true' : 'false' }}"
        :active="{{ $menu->route_active ? 'true' : 'false' }}"
    >
        <app-nav-link href="{{ url($menu->route_prefix) }}">
            {{ trans($menu->title) }}
        </app-nav-link>
    </app-nav-item>
@endforeach
